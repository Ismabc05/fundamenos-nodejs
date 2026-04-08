const fs = require("fs"); // llamamos al modulo de sistema de archivos

const data = fs.readFileSync("example.txt", "utf8")

console.log("Contenido: ", data)