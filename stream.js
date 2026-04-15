const fs = require("fs")


const LeerArchivoStream = fs.createReadStream("ELOQUENT.txt", {encoding: "utf-8"}) 
// Como el archivo es grande, usamos createReadStream para leerlo por partes (streams) en lugar de cargarlo completo en memoria. Además, especificamos el encoding "utf-8" para que los datos se reciban como texto en lugar de binario

const EscribirArchivoStream = fs.createWriteStream("ouput.txt") // Y creamos el archivo grande donde se va a guardar el texto

LeerArchivoStream.on("data", (bloque) => { // “trae todos los datos y por cada bloque lo va escribiendo”
    console.log("Leyendo el bloque")
    EscribirArchivoStream.write(bloque)
});


LeerArchivoStream.on("end", () => {
    console.log("Terminó la lectura del archivo")
    EscribirArchivoStream.end()
});

LeerArchivoStream.on("error", (error) => {
    console.log(error)
});


EscribirArchivoStream.on("error", (error) => {
    console.log(error)
})


