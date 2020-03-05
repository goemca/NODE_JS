const moment = require("moment");

var fecha = new moment("31/12/2019","DD/MM/YYYY");
var cambiar = fecha.format("MM/DD/YYYY");
console.log(cambiar);