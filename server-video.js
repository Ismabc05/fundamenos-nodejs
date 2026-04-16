const fs = require("fs")
const path = require("path")
const  http = require("http")



const server = http.createServer((req, res) => {

    if( req.url === "/video") {
        const videoPath = path.join(__dirname, "video.mp4")
        const stat = fs.statSync(videoPath) // con esto obtenemos la informacion  general del archivo que hay en esa ruta

        res.writeHead(200, {
            "Content-Type" : "video/mp4",
            "content-length" : stat.size // nos da lo que ocupa ese archivo
        });

        const readStream = fs.createReadStream(videoPath);
        let chunkCounter = 0

        readStream.on("data", (chunk) => {
            chunkCounter ++;
            console.log(`Chunk ${chunkCounter}: size: ${chunk.length} bytes leidos y enviados`)
        })

        readStream.pipe(res); // envia los datos como respuesta


    } else{
        res.writeHead(404, {
            "Content-Type" : "text-plain"
        });


        res.end("Not Found")
    }
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Servidor funcionando")
})