// Considere la siguiente frase: ‘Frase inicial’
// Realizar una aplicación de servidor node.js con express que incorpore las siguientes rutas:
// GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa
// GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ contenga la palabra hallada en la frase en la posición dada (considerar que la primera palabra es la #1.
// POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ y la agrega al final de la frase. Devuelve un objeto que como campo ‘agregada’ contenga la palabra agregada, y en el campo ‘pos’ la posición en que se agregó dicha palabra.
// PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ y reemplaza en la frase aquella hallada en la posición dada. Devuelve un objeto que como campo ‘actualizada’ contenga la nueva palabra, y en el campo ‘anterior’ la anterior.
// DELETE '/api/palabras/:pos': elimina una palabra en la frase, según la posición dada (considerar que la primera palabra tiene posición #1).
// Aclaraciones:
// Utilizar Postman para probar la funcionalidad.
// El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.

const express = require("express"); // Import express
const app = express(); // Create an instance of express
const PORT = 8080; // PORT to listen

const frase = "Frase inicial";

// Create the endpoint to return the phrase object
app.get("/api/frase", (req, res) => {
    res.json({ frase });
});

// Create the endpoint to return the word in the given position, first word is #1
app.get("/api/palabras/:pos", (req, res) => {
    res.json({ buscada: frase.split(" ")[req.params.pos - 1] });
});

// Create the endpoint to add a word to the phrase in the palabra field, and return the word and the position in the pos field
app.post("/api/palabras", (req, res) => {
    const palabra = req.query.palabra;
    frase += " " + palabra;
    res.json({ agregada: palabra, pos: frase.split(" ").length });
});

// Create the endpoint to replace a word in the phrase in the given position, first word is #1, and return the new word and the old word
app.put("/api/palabras/:pos", (req, res) => {
    const palabra = req.query.palabra;
    const palabras = frase.split(" ");
    const anterior = palabras[req.params.pos - 1];
    palabras[req.params.pos - 1] = palabra;
    frase = palabras.join(" ");
    res.json({ actualizada: palabra, anterior });
});

// Create the endpoint to delete a word in the phrase in the given position, first word is #1
app.delete("/api/palabras/:pos", (req, res) => {
    const palabras = frase.split(" ");
    palabras.splice(req.params.pos - 1, 1);
    frase = palabras.join(" ");
    res.json({ eliminada: true });
});

// Start the server
app.listen(PORT, () => {
    if (PORT) {
        console.log(`Server listening on port ${PORT}`);
    } else {
    console.error("Error message");
    }
});

