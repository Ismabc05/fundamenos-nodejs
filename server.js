const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text-plain"})
    res.end("Ismael Bemar")
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Servidor funcionando")
})




// node --watch server.js, Ese comando ejecuta tu archivo server.js con Node.js y reinicia el servidor automáticamente cuando detecta cambios en los archivos.