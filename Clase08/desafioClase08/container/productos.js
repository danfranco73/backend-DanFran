// Implementar la API en una clase separada, utilizando un array como soporte de persistencia en memoria.
// creo la clase productos conentenedora de los productos

class Productos {
    constructor() {
        this.productos = []; // array of products
    }
    //Metodos
    getAll() {
        return this.productos; // list all products
    }
    getById(id) {
        return this.productos.find((producto) => producto.id === id); // get product by id
    }

    getNextId() {
        return this.productos.length + 1; // get next id
    }

    // agregar un producto
    add( producto ) {
        this.productos.push(producto); // add product
    }

    save(producto) {
        this.productos.push(producto); // save product
    }
    update(id, producto) {
        let index = this.productos.findIndex((producto) => producto.id === id); // get product by id
        this.productos[index] = producto; // update product
    }
    delete(id) {
        let index = this.productos.findIndex((producto) => producto.id === id); // get product by id
        this.productos.splice(index, 1); // delete product
    }
}


module.exports = Productos; // export class