// Desarrollar un servidor que permita realizar la suma entre dos números utilizando tres rutas en estos formatos (Ejemplo con números 5 y 6)
// a) Ruta get '/api/sumar/5/6
// b) Ruta get '/api/sumar?num1=5&num2=62) 
// c) Ruta get '/api/operacion/5+6
// No hace falta validar los datos a sumar, asumimos que los ingresamos correctamente.
// Implementar las rutas post, put y delete en la dirección '/api' respondiendo 'ok' + (post/put/delete) según corresponda. Probar estas rutas con Postman, verificando que el servidor responda con el mensaje correcto.// El servidor escuchará en el puerto 8080 y mostrará todos los mensajes de conexión/error que correspondan.

const express = require("express"); // Import express
const app = express(); // Create an instance of express
const PORT = 8080; // PORT to listen

// Create the endpoint to return the sum of two numbers
app.get("/api/sumar/:num1/:num2", (req, res) => {
    res.json({ resultado: parseInt(req.params.num1) + parseInt(req.params.num2) });
});

// Create the endpoint to return the sum of two numbers
app.get("/api/sumar", (req, res) => {
    res.json({ resultado: parseInt(req.query.num1) + parseInt(req.query.num2) });
});

// Create the endpoint to return the sum of two numbers
app.get("/api/operacion/:num1/:num2", (req, res) => {
    res.json({ resultado: eval(req.params.num1 + "+" + req.params.num2) });
});

// Create the endpoint to return the sum of two numbers
app.post("/api", (req, res) => {
    res.json({ resultado: "ok post" });
});

// Create the endpoint to return the sum of two numbers
app.put("/api", (req, res) => {
    res.json({ resultado: "ok put" });
});

// Create the endpoint to return the sum of two numbers
app.delete("/api", (req, res) => {
    res.json({ resultado: "ok delete" });
});

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => {
    console.log(`Error in server: ${error}`);
});

