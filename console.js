// Métodos basicos de salida
console.log("Hola mundo")
console.info("Console.info() : Similar a .log() pero para mostrar informacion");
console.warn("Console.warn() : Para advertencias")
console.error("Console.error() : Para errores")

// Tablas

const usuarios = [
    {nombre: "Ismael", edad: 21, rol: "Futbolista"},
    {nombre: "Nerea", edad: 18, rol: "Modelo"},
    {nombre: "Angel", edad: 59, rol: "Hosteleroo"}
];

console.log(usuarios)
console.table(usuarios) // Me muestra graficamente
console.table(usuarios, ["nombre", "rol"]) // podemos especificar el que mostrar

// Tiempo

console.time("Operacion") // calcula el tiempo de ejecucion. Empieza a contar 

for ( let i = 0; i < 1000000; i++) {

}

console.timeEnd("Operacion") // Detiene el contador

// Count

console.count("Contador");
console.count("Contador");
console.count("Contador");
console.count("Contador");
console.count("Contador");
console.count("Contador");
console.countReset("Contador");
console.count("Contador");

// Agrupacion

console.group("Grupo Principal")
console.log("Informacion 1")
console.group("Subgrupo")
console.log("Informacion  subgrupo 1")
console.groupEnd()
console.group("Subgrupo 2")
console.log("Informacion  subgrupo 2")
console.groupEnd()
console.log("Final")
console.groupEnd()

// Afirmaciones

console.assert(1 === 1, "Esto no se muestra ya que es verdadero")
console.assert(1 === 2, "Esto si se va a mostar ya que es falso")

// clear

console.clear()




console.trace("Muestra la pila de llamadas actual")

