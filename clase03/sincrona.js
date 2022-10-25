// ejemplo función sincrona	
/* const fs = require('fs');
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
 */
// ejecución asincrónica
    const fs = require('fs');
    const path1 = require('path');

    const archivo1 = path1.join(__dirname, 'data.csv');

    const leerArchivo1 = (archivo1) => {
        return new Promise((resolve, reject) => {
            fs.readFile(archivo1, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data.length);
            });
        });
    }

    const procesarArchivo = (data) => {
        console.log(data);
    }

    setTimeout(() => {

        console.log('inicio');
        
    }, 2000);

    leerArchivo1(archivo1)
        .then(procesarArchivo)
        .catch(err => console.log(err));

    console.log('fin');


