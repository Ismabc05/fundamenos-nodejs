const args = process.argv.slice(2); // con esto le decimos que quiero llegar a la posicion numero 2, es decir en mi ruta de ejecutar mi archivo que me ejecuta desde la posicion 2 hacia adelante

let min = 1;
let max = 100;

if(args.length >= 2) {
    const parsedMin = parseInt(args[0], 10);
    const parsedMax = parseInt(args[1], 10);

    if(!isNaN(parsedMin) && !isNaN(parsedMax) && parsedMin < parsedMax) {
        min = parsedMin;
        max = parsedMax;
    } else {
        console.log("Rango no valido")
    }
}

const randomNumber = Math.floor(Math.random() * ( max - min + 1)) + min; // esto va a generar un numero aleatorio entre el minimo y el maximo incluyendo ambos

console.log(`Numero aleatorio generado entre ${min} y ${max} es ${randomNumber}`)