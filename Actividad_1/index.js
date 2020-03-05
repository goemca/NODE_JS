const fs = require('fs');
const moment = require("moment");
const coolImages = require("cool-images");


// let vector = coolImages.many(1024, 840, 10);
// vector.forEach(indice => {
//     console.log(indice)
// });


// async function llamarImages() 
// {
//     let vector = coolImages.many(1024, 840, 10);
//     vector.forEach(indice => {
//         var nueva = indice.toString();
//     });

//     const texto = cambiar.toString();
//     fs.appendFileSync('./log.txt', cambiar+nueva);
// }

// llamarImages();

arrayImages = coolImages.many(600, 800, 5);
let timeStamp = moment().format('YYYY MM DD, hh:mm:ss ') + '\n'
fs.appendFileSync('log.txt', timeStamp, function (err) 
{
    if (err) throw err;
});

for (let index = 0; index < arrayImages.length; index++) 
{
    fs.appendFileSync('log.txt', arrayImages[index] + '\n')
}
