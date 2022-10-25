// promesas= es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona

// Path: clase03\promesas.js
const fs = require('fs');
const path = require('path');

const archivo = path.join(__dirname, 'data.csv');

const leerArchivo = (archivo) => {
    return new Promise((resolve, reject) => {
        fs.readFile(archivo, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

const procesarArchivo = (data) => {
    console.log(data);
}

leerArchivo(archivo)
    .then(procesarArchivo)
    .catch(err => console.log(err));

    

