import gplay from 'npm:google-play-scraper'
Deno.serve(async(req) =>{
    try {
       const grossing= await gplay.list({
            num:100,
            collection:gplay.collection.GROSSING,
            fullDetail:true
            
        })

        var list = []
        for (var item of grossing){
            list.push({
                appId:item.appId,
                currency:item.currency,
                developer:item.developer,
                icon:item.icon,
                free:item.free,
                price:item.price,
                summary:item.summary,
                url:item.url,
                score:item.score,
                scoreText:item.scoreText,
                title:item.title,
                installs:item.installs,
                version:item.version,
                maxInstalls:item.maxInstalls,
                isAvailable:item.isAvailableInPlayPass
            });
        }
       
        return Response.json({success:true, grossing:list})
    } catch (error) {
        return Response.json({error:true, message:"internal server error"})
    }
})
