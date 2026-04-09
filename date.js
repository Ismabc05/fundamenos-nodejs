const dateFormatter = require("@ismaelbedmar/platzidate");

console.log("TimeStamps:", dateFormatter.getTimeStamp())
console.log("Fecha en Español:", dateFormatter.getLongTime())
console.log("Fecha en Ingles:", dateFormatter.getLongTime("en-Us"))