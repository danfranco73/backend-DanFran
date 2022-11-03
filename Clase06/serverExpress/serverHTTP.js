// Instalo la libreria express
// npm install express
// defino el puerto 8080
// creo el servidor
// defino el mensaje de respuesta
// defino el path de la ruta
// defino el metodo de la ruta
// defino el callback de la ruta
// defino el callback del servidor



const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hola desde el back usando express!');
});

// configuramos el puerto
const server = app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});



