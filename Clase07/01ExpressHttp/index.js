const express = require('express'); // Importo express

const app = express(); // Creo una instancia de express

// Configuración de la aplicación para procesar la información enviada por el cliente

app.use(express.json()); // Para procesar JSON
app.use(express.urlencoded({ extended: true })); // Para procesar formularios
const PORT = 8070 || process.env.PORT; // Puerto de escucha

// Definición de la ruta raíz
app.get('/API/MENSAJES', (req, res) => {
    console.log('HTTP GET');
    // OBTENER LOS DATOS DE LA PETICIÓN
    res.json({msg: "Hello world"});
});

// listen to the server

app.listen( PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// query params
 app.get("api/mensajes", (req, res) => {
    console.log("get con query params");

    if(Object.entries(req.query).length > 0){
        res.json({
            result: "GET with query params",
            query: req.query
        })
    } else {
        res.json({
            result: "GET without query params"
        })
    }
});

// Path params
app.get("api/mensajes/:id", (req, res) => {
    console.log("get con path params");
    res.json(req.params);
});


// POST

app.post("api/mensajes", (req, res) => {
    console.log("post");
    res.json(req.body);
});

