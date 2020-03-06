const express = require("express");
const server = express();

server.listen(3000, () => {
    console.log("Server iniciado....")
});

server.get('/carpeta', (request, response) => {
    const peticion = {
        nombre: 'Carlos',
        apellido: 'Saul Menem',
    };
    if (!peticion)
    {
        response.statusCode = 500;
        response.json({error: 'algo salio mal'});
    }
    response.json(peticion)
});

// server.get('/error', (request, response) => {

//     response.statusCode = 500;
//     response.json({ error: 'Algo salio mal :(' });
// });