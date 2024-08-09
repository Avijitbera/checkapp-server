import authVerify from './middleware/auth_verify.ts'
import {PrismaClient} from './generated/client/deno/edge.ts'
import { uuid } from " https://deno.land/x/uuid/mod.ts";
const prisma = new PrismaClient()

Deno.serve(async(req) =>{
    if(req.method == "POST"){
        const token = req.headers.get('authorization')
        const uid = await authVerify(token)
        if(uid == null){
            return Response.json({auth:false, message:"authentication required"})
        }
        const body = await req.json()
        const tag:string = body.tag
        const appId:string = body.appId

        const tagId = uuid()

        const data = await prisma.tags.findFirst({
            where:{
                name:tag.toUpperCase()
            }
        })
        if(data == null){
            await prisma.tags.create({
                data:{
                    name:tag.toUpperCase(),
                    tagId:tagId
                }
            })
        }

        await prisma.appTags.create({
            data:{
                appId:appId,
                tagId:tagId,
                uid:uid,

            }
        })
        return Response.json({success:true, tag:tag, tagId:tagId})

    }else{
        return Response.json({error:true, message:"invalid request"})
    }
})