// Función tradicional
const mostrar = function (params) {
    console.log(params);
}

mostrar('hola soy función tradicional');

// Función flecha
const mostrar2 = (params) => {
    console.log(params);
}

mostrar2('hola soy función flecha');

// Función flecha reducida
const mostrar3 = params => console.log(params);

mostrar3('hola soy función flecha reducida');

// Función flecha reducida con retorno implícito 
const mostrar4 = params => params;

console.log(mostrar4('hola soy función flecha reducida con retorno implícito'));


// Call back = función que se pasa como parámetro a otra función
const mostrar5 = (params, callback) => {
    callback(params);
}

mostrar5('hola soy función flecha reducida con callback', mostrar3);

// Función flecha reducida con retorno implícito y callback
const mostrar6 = (params, callback) => callback(params);

mostrar6('hola soy función flecha reducida con retorno implícito y callback', mostrar3);


// Ejemplo - procesamiento de una archivo csv con miles de registros, queremos saber el tiempo que tarde en hacer todo ester procesmiento para luego mejorarlo
const fs = require('fs');
const path = require('path');

const archivo = path.join(__dirname, 'data.csv');

const leerArchivo = (archivo, callback) => {
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        callback(data);
    });
}

const procesarArchivo = (data) => {
    console.log(data);
}

leerArchivo(archivo, procesarArchivo);

