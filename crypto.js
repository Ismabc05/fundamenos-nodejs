const crypto = require("crypto") // sirve para trabajar con criptografía, es decir, funciones de seguridad.

const texto = "Hello, Crypto World!"

const hash = crypto
    .createHash("sha256") //eliges el algoritmo
    .update(texto) // le pasamos el texto que queremos
    .digest("hex") // obtenemos el resultado en hexadecimal

console.log(texto)
console.log(hash)