const express = require("express");
const server = express();

server.listen(3000, () => {
    console.log("Server iniciado....")
});

const alumnos = [
    {
        id: 1,
        nombre: 'Carlos',
        apellido: 'Saul Menem'
    },
    {
        id: 2,
        nombre: 'Lilita',
        apellido: 'Carrio'
    },
    {
        id: 3,
        nombre: 'Hugo',
        apellido: 'Duhalde'
    }



];

server.get('/acamica/dwfs/alumnos', (request, response) => {
    response.json(alumnos);
});


server.get('/acamica/dwfs/alumnos/:id', (request, response) => {
    let alumno;
    for (i = 0; i < alumnos.length; i++) 
    {
        alumno = alumnos[i];
        if (alumno.id === request.params.id) 
        {
            break;
        }
    }
    response.json(alumno);

});


server.get('/acamica/dwfs/alumnos/:id', (request, response) => {
    let alumno;
    alumno = alumnos[request.params.id - 1]
    response.json(alumno);

});


// server.get('/acamica/dwfs/alumnos', (request, response) => {
//     const peticion = {
//         nombre: 'Carlos',
//         apellido: 'Saul Menem',
//     };
//     if (!peticion)
//     {
//         response.statusCode = 500;
//         response.json({error: 'algo salio mal'});
//     }
//     response.json(peticion)
// });

// server.get('/error', (request, response) => {

//     response.statusCode = 500;
//     response.json({ error: 'Algo salio mal :(' });
// });


