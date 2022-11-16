// Implementar la API en una clase separada, utilizando un array como soporte de persistencia en memoria.
// Consigna: Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:
// GET '/api/productos' -> devuelve todos los productos.
// GET '/api/productos/:id' -> devuelve un producto según su id.
// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
// DELETE '/api/productos/:id' -> elimina un producto según su id.
// Cada producto estará representado por un objeto con el siguiente formato:
// {title: (nombre del producto),price: (precio),thumbnail: (url al logo o foto del producto)}
// Cada ítem almacenado dispondrá de un id numérico proporcionado por el backend, comenzando en 1, y que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que va a ser listado en forma individual.
// Para el caso de que un producto no exista, se devolverá el objeto:
// { error : 'producto no encontrado' }
// Incorporar el Router de express en la url base '/api/productos' y configurar todas las subrutas en base a este.
// Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.
// El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo.
// Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.


const express = require('express'); // import express
const app = express(); // create express app
const PORT = 8080; // define port
const router = express.Router(); // create router
const Productos = require('../container/productos'); // import class
const productos = new Productos(); // create instance of class

// Middleware
app.use(express.json()); // parse json
app.use(express.urlencoded({ extended: true })); // parse urlencoded
app.use(express.static('public')); // define public folder

// Routes
app.use('/api/productos', router); // define router

// GET '/api/productos' -> get all products
router.get('/', (req, res) => {
    res.json(productos.getAll()); // list all products
});

// GET '/api/productos/:id' -> get product by id
router.get('/:id', (req, res) => {
    let id = req.params.id; // get id from params
    let producto = productos.getById(id); // get product by id
    if (producto) {
        res.json(producto); // return product
    } else {
        res.json({ error: 'producto no encontrado' }); // return error
    }
});

// POST '/api/productos' -> get and add new product, and give it an id assigned
router.post('/', (req, res) => {
    let producto = req.body; // get product from body
    producto.id = productos.getNextId(); // get next id
    productos.add(producto); // add product
    res.json(producto); // return product
});

// PUT '/api/productos/:id' -> get and update product by id
router.put('/:id', (req, res) => {
    let id = req.params.id; // get id from params
    let producto = req.body; // get product from body
    producto.id = id; // set id
    productos.update(id, producto); // update product
    res.json(producto); // return product
});

// DELETE '/api/productos/:id' -> delete product by id
router.delete('/:id', (req, res) => {
    let id = req.params.id; // get id from params
    let producto = productos.getById(id); // get product by id
    if (producto) {
        productos.delete(id); // delete product
        res.json(producto); // return product
    } else {
        res.json({ error: 'producto no encontrado' }); // return error
    }
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // log server running
});

server.on('error', error => {
    console.log('Error en servidor:', error); // log server error
});



