const os = require("os") // proporciona informacion del sistema operativo

function showSystemInfo() {
    console.log(`Sistema operativo: ${os.type()}`) // muestra el sistema operativo
    console.log(`Plataforma : ${os.platform()}`)
    console.log(`Arquitectura : ${os.arch()}`)
    console.log(`Version : ${os.release()}`)
    const uptime = os.uptime();
    console.log(`System Uptime: ${uptime} seconds`); // devuelve el tiempo que lleva ecendido el sistema
    const totalMem = os.totalmem();
    console.log(`Total Memory: ${totalMem / 1024 / 1024} MB`); //ponemos 1024 dos veces ya que lo pasamos a decimal, por defecto esá en binario
    const freeMem = os.freemem();
    console.log(`Free Memory: ${freeMem / 1024 / 1024} MB`);
    console.log('CPU Info:');
    const cpus = os.cpus(); // devuelve información de todos los núcleos (cores) de la CPU.
    cpus.forEach((cpu, index) => { // Recorre cada núcleo uno por uno y muestra la informacion
        console.log(`  Core ${index + 1}: ${cpu.model} @ ${cpu.speed / 1000} GHz`);
    });
    console.log(`Home Directory: ${os.homedir()}`);
    console.log(`Hostname: ${os.hostname()}`);
}



showSystemInfo()