import axiod from "https://deno.land/x/axiod/mod.ts";
import gplay from 'npm:google-play-scraper'
import {PrismaClient} from './generated/client/deno/edge.ts'
import _url from 'node:url'
//Get a google play store url and return app details from google play store
//and create data in database and return additional data related in app 
const create_url = 'https://create-app-details.deno.dev'

const prisma = new  PrismaClient()

Deno.serve(async(req, ) =>{
    if(req.method == "POST"){
        const data = await req.json()
        const url = data.url
        if(!url){
            return Response.json({error:true, message:"invalid request"})
        }
        
        
        const packageData = _url.parse(url, true).query
        const packages:any = packageData.id?.toString()
        
        const details = await gplay.app({appId:packages?.toString()})
       axiod.post(create_url, {
            title:details.title,
            minInstalls:details.minInstalls,
            maxInstalls:details.maxInstalls,
            icon:details.icon,
            score:details.score,
            ratings:details.ratings,
            reviews:details.reviews,
            price:details.price,
            free:details.free,
            developer:details.developer,
            appId:details.appId,
            appUrl:details.url
        })

        // const tags = await prisma.application.findFirst({
        //     where:{
        //         appId:packages
        //     }
        // })
        
        
        return Response.json({success:true, data: details})
    }else{
        return Response.json({error:true, message:"method not allowed"})
    }
})