// A) Guarde en un archivo llamado fyh.txt la fecha y hora actual.
// B) Lea nuestro propio archivo de programa y lo muestre por consola.

const fs = require('fs');
const path = require('path');

const fecha = new Date();
const fechaYHora = fecha.toLocaleString();

fs.writeFile(path.resolve('fyh.txt'), fechaYHora, (err) => {
    if (err) {
        console.log(err);
    }
});

fs.readFile(path.resolve('fyh.txt'), 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

