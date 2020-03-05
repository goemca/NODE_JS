const lib = require("./calculator");
const aux1 = lib.suma(10,2);
const aux2 = lib.resta(10,2);
const aux3 = lib.multiplicacion(10,2);
const aux4 = lib.division(10,2);

console.log("La Suma de los valores es: "+aux1);
console.log("La Resta de los valores es: "+aux2);
console.log("La Multiplicacion de los valores es: "+aux3);
console.log("La Division de los valores es: "+aux4);