const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Ismael Bemar")
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Servidor funcionando")
})




// node --watch server.js, Ese comando ejecuta tu archivo server.js con Node.js y reinicia el servidor automáticamente cuando detecta cambios en los archivos.

// El módulo http sirve para crear servidores HTTP en Node.js.
//Creamos un servidor con http.createServer, que recibe dos parámetros: req (request) y res (response).
//El request siempre existe porque representa la petición del cliente, aunque no lo usemos.

// En la respuesta enviamos un estado 200 (todo correcto) y un encabezado Content-Type: text/plain, indicando que el contenido es texto plano.
// Luego usamos res.end() para enviar el mensaje "Ismael Bemar" y cerrar la respuesta.

// Finalmente, el servidor escucha en el puerto 3000 en 127.0.0.1 (localhost), lo que significa que solo es accesible desde nuestra propia máquina.