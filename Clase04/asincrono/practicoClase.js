const fs = require('fs');

// Ejecución asincrónica

// Lectura de un archivo

fs.readFile('data.csv', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Escritura asincrónica

fs.writeFile('data.csv', 'Write async', 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('The file has been saved!');
});

// usando el mkdir

fs.mkdir('data', { recursive: true }, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('The directory has been created!');
});

// usando el rmdir

/* fs.rmdir('data', { recursive: true }, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('The directory has been removed!');
}); */

// readdir

fs.readdir('data', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(files);
});
