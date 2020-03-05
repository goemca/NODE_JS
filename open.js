const fs = require('fs');
fs.writeFileSync('./test.txt', 'Hola mundo!');
const textoEnBinario = fs.readFileSync('./test.txt');
const texto = textoEnBinario.toString();
const textoEnMayusculas = texto.toUpperCase();
fs.writeFileSync('./nuevo_archivo_2.txt', textoEnMayusculas);