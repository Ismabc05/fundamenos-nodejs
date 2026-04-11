const fs = require("fs") // tenemos acceso a todos los archivos de nuestra computadora en nodejs   

const fileName = "example.txt";

// CREAR

fs.writeFileSync(fileName, "Hola este es un archivo de ejemplo");
console.log("Archivo creado correctamente")


// LEER

const content = fs.readFileSync(fileName, "utf-8")
console.log(content)


// ACTUALIZAR

fs.appendFileSync(fileName, "\nEsta es una nueva linea.\n")
console.log("Archivo actualizado correctamente")


// ELIMINAR

fs.unlinkSync(fileName)
console.log("Archivo eliminado correctamente")

