
const fs = require('fs');
fs.writeFile("./test.txt", "Hola CoronaVirus!", function (err) 
{
    console.log("Archivo guardado");
});

