//Creamos un archivo server.js. 
// En el mismo inicializamos todos los módulos. 
// Crearemos una aplicación Express y crearemos un servidor para conectarse a los navegadores.

const express = require("express"); // Import express
const app = express(); // Create an instance of express
const multer = require("multer"); // Import multer
const path = require("path"); // Import path
const fs = require("fs"); // Import fs

const PORT = 8060; // PORT to listen


// Create a storage object
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Set the destination
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname+'-'+Date.now()); // Save the original name of the file and add the date
    },
});

// Create a multer object
const upload = multer({ storage: storage }); 

// Create a route to upload files
app.post("/upload", upload.single("myFile"), (req, res,next) => {
    res.send("File uploaded successfully");
});

// Create a route to download files
app.get("/download/:file", (req, res) => {
    const file = path.join(__dirname + '/index.html', "uploads", req.params.file); // Set the path of the file
    res.download(file); // Set disposition and send it.
});

// Create a route to delete files
app.get("/delete/:file", (req, res) => {
    const file = path.join(__dirname + '/index.html', "uploads", req.params.file); // Get the file path
    fs.unlink   // Delete the file
    res.send("File deleted successfully");
});

// Create a route to list files
app.get("/list", (req, res) => {
    const files = fs.readdirSync("uploads"); // Get the files
    res.send(files); // Send the files
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


// listen to the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

