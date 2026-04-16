const buffer = require("buffer") // El módulo Buffer en Node.js permite trabajar con datos binarios en memoria, y convertirlos entre binario y texto (y viceversa).

const bufferFromString = Buffer.from("Hello World", "utf-8")

console.log(bufferFromString)


const bufferAlloc = Buffer.alloc(10) // le decimos cual es la cantidad maximo que puede contener que son 10 bytes
console.log(bufferAlloc)


bufferAlloc.write("node.js") // escribimos en el buffer
console.log(bufferAlloc)

const buffertoString = bufferAlloc.toString("utf-8", 0, 5) // lo pasamos a string
console.log(buffertoString)