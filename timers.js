// No se imnportan timers ya que son globales

console.log("Hora Actual:", new Date().toLocaleTimeString())


const timeOut = setTimeout(() => { // cuando pasen dos segundos se ejecuta lo de dentro
    console.log("Este mensaje despues de dos segundos")
    console.log("Hora Actual:", new Date().toLocaleTimeString())
}, 2000)


setImmediate(() => { // despues de que se haya ejectuado el codigo actual, se ejecuta esto
    console.log("Este mensaje aparece en la proxima iteacion del bucle")
    console.log("Hora Actual:", new Date().toLocaleTimeString())
});


const Interval = setInterval(() => { // cada tres segundos se ejecutará
    console.log("Este mensaje aparece cada tres segundos")
}, 3000)


setTimeout(() => {
    console.log("Cancelar el intervalo despues de 10 segundos")
    clearInterval(Interval)
}, 1000)

const TimeOut = setTimeout(() => {
    console.log("Este menaje nunca aparecerá")
}, 1000)

clearTimeout(timeOut);

console.log("Hora final", console.log("Hora Actual:", new Date().toLocaleTimeString()))
