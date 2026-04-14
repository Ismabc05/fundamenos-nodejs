// No se imnportan process ya que son globales


console.log(`ID del proceso (PID): ${process.pid}`)
console.log(`Directorio actual: ${process.cwd()}`)
console.log(`Version de Node.js: ${process.version}`)
console.log(`Plataforma: ${process.platform}`)
console.log(`Arquitectura: ${process.arch}`)
console.log(`Tiempo de ejecucion: ${process.uptime()} segundos\n`)


console.log(process.env) // donde se encuentran las variables de entorno
console.log(`Path: ${process.env.PATH}`)
console.log(`User Profile: ${process.env.HOME || process.env.USERPROFILE}`)
console.log(`NODE_EMV: ${process.env.NODE_ENV || "No definido"}`)


const memoryUsage = process.memoryUsage(); // cuánta memoria está usando el proceso
console.log(memoryUsage)






process.on("exit", code => {
    console.log("EL proceso está terminado", code)
}) // antes de que termine el proceso muestra ese mensaje

process.on("SIGINT",  () => {
    console.log("Se recibio la señal de interrupcion (Ctrl + c)")
    process.exit(0)
}) // cuando pulsamos Ctrl + C, se dispara el evento SIGINT
// y nosotros llamamos a process.exit(0) para cerrar el proceso

console.log("Escribe algo y presiona enter o Ctrl+c para salir")
process.stdin.on("data", data => { // recibimos la informacion mediante stdin.on y le pasamos data a la funcion que se va a encargar de pasarla a texto
    const input = data.toString().trim()
    if(input.toLowerCase() === "salir") {
        console.log("Comando recibido")
        process.exit(0)
    }else {
        console.log(`Mensaje: ${input}`)
        console.log("Escribe salir para terminar o escribe algo mas")
    }
})