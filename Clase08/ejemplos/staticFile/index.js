// Partiendo del ejercicio anterior, generar una carpeta pública 'public' en el servidor, la cual tendrá un archivo index.html. 
// En ese archivo se encontrarán dos formularios: uno que permita ingresar mascotas y otro personas utilizando el método post
// Probar el ingreso de datos mediante los formularios y con Postman
// Verificar los datos cargados en cada caso.


const express = require("express"); // Import express
const app = express(); // Create an instance of express
const PORT = 8060; // PORT to listen

app.use(express.json()); // Parse the body of the request to JSON
app.use(express.urlencoded({ extended: true })); // Parse the body of the request to URL encoded

// Partiendo del ejercicio anterior, generar una carpeta pública 'public' en el servidor, la cual tendrá un archivo index.html.

app.use(express.static("public"));

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
    }
});

