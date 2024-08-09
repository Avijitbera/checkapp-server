import {PrismaClient} from './generated/client/deno/edge.ts'
const prisma = new PrismaClient()

Deno.serve(async(req) =>{
    console.log(req.method)
    try {
        if(req.method == "POST"){
            const body = await req.json()
            const title = body.title
            const minInstalls = body.minInstalls
            const maxInstalls = body.maxInstalls
            const icon = body.icon
            const score = body.score
            const ratings = body.ratings
            const reviews = body.reviews
            const price = body.price
            const free = body.free
            const developer = body.developer
            const appId = body.appId
            const appUrl = body.appUrl
    
            const app = await prisma.application.findFirst({
                where:{
                    appId:appId
                }
            })
            
            if(app != null){
                return Response.json({})
            }
           await prisma.application.create({
                data:{
                    appId:appId,
                    appUrl:appUrl,
                    developer:developer,
                    free:free,
                    icon:icon,
                    maxInstalls:maxInstalls,
                    minInstalls:minInstalls,
                    price:price,
                    ratings:ratings,
                    reviews:reviews,
                    score:score,
                    title:title,
                    
                }
            })
            
            return Response.json({})
        }else{
            return Response.json({error:true, message:'internal server error'})
        }
    } catch (error) {
       
        return Response.json({})
    }
})