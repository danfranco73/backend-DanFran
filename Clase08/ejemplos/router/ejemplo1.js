// Crear un servidor que permita manejar una lista de mascotas y personas. Debe poseer dos rutas principales: '/mascotas' y '/personas', las cuales deben incluir métodos para listar y para agregar recursos:
// GET: devolverá la lista requerida en formato objeto.
// POST: permitirá guardar una persona ó mascota en arrays propios en memoria, con el siguiente formato: 
// Persona -> { "nombre": ..., "apellido": ..., "edad":... } Mascota -> { "nombre":..., "raza":..., "edad":... }
// Utilizar el Router de express para definir las rutas base, implementando las subrutas en los métodos correspondientes.
// - Probar la funcionalidad con Postman.
// - El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen

const express = require("express"); // Import express
const app = express(); // Create an instance of express
const PORT = 8080; // PORT to listen

app.use(express.json()); // Parse the body of the request to JSON
app.use(express.urlencoded({ extended: true })); // Parse the body of the request to URL encoded

const mascotas = [];
const personas = [];

const router = express.Router();

// main routes

router.get("/mascotas", (req, res) => {
    res.json({mascotas:mascotas});
});

router.get("/personas", (req, res) => {
    res.json({personas:personas});
});

router.post("/mascotas", (req, res) => {
    console.log("ingreso mascota");
    mascotas.push(req.body);
    res.json("mascota agregada");
});

router.post("/personas", (req, res) => {
    console.log("ingreso persona");
    personas.push(req.body);
    res.json("persona agregada");
});

// delete routes

router.delete("/mascotas", (req, res) => {
    console.log("elimino mascota");
    mascotas.pop();
    res.json("mascota eliminada");
});

router.delete("/personas", (req, res) => {
    console.log("elimino persona");
    personas.pop();
    res.json("persona eliminada");
});

// router middleware

app.use("/api", router);

// start the server

app.listen(PORT, () => {
    if (PORT) {
        console.log(`Server listening on port ${PORT}`);
    } else {
    console.error("Error message");
    }
});

