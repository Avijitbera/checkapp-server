import authVerify from './middleware/auth_verify.ts'
import {PrismaClient} from './generated/client/deno/edge.ts'
import { uuid, } from "https://deno.land/x/uuid/mod.ts";
const prisma = new PrismaClient()

Deno.serve(async(req) =>{
    try {
        if(req.method == "POST"){
            return Response.json({error:true, message:"invalid request"})
        }
        const token = req.headers.get('authorization')
        const uid = await authVerify(token)
        if(uid == null){
            return Response.json({auth:false, message:"authentication required"})
        }
        const body = await req.json()
        const message = body.message
        const appId = body.appId
        const rating:number = body.rating
        const type = body.type
        if(rating < 1 || rating > 10){
            return Response.json({error:true, message:"invalid rating"})
        }
        const data = await prisma.appReview.findFirst({
            where:{
                appId:appId,
                uid:uid
            }
        })
        if(data == null){
            const reviewId = uuid()
           const review = await prisma.appReview.create({
                data:{
                    reviewId:reviewId,
                    appId:appId,
                    uid:uid,
                    rating:rating,
                    message:message,
                    type:type
                }
            })
            return Response.json({success:true, data:review})
        }else{
            const review = await prisma.appReview.update({
                data:{
                    type:type,
                    message:message,
                    rating:rating,
                    updatedAt:new Date(),
                },
                where:{
                    reviewId:data.reviewId
                }
            })
            return Response.json({success:true, data:review})
        }

    } catch (error) {
        return Response.json({error:true, message:'internal server error'})
    }
})
