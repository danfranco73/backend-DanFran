// Formato: link a un repositorio en Github y url de proyecto subido a glitch
// Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
// Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
// Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
// Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.
// Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.


const express = require("express");
const app = express();
const PORT = 8080; // server's listening port
const fs = require("fs").promises;
const path = require("path");

// I bring the class Contenedor from the previous challenge
class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  async save(producto) {
    try {
      const productos = await this.getAll();
      if (productos.length === 0) {
        producto.id = 1;
      } else {
        producto.id = productos[productos.length - 1].id + 1;
      }
      productos.push(producto);
      await fs.writeFile(
        path.resolve("./", this.nombreArchivo),
        JSON.stringify(productos, null, 2)
      );
      return producto.id;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      const productos = await this.getAll();
      const producto = productos.find((producto) => producto.id === id);
      return producto;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const contenido = await fs.readFile(
        path.resolve("./", this.nombreArchivo),
        "utf-8"
      );
      return JSON.parse(contenido);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {
    try {
      const productos = await this.getAll();
      const producto = productos.find((producto) => producto.id === id);
      if (producto) {
        const index = productos.indexOf(producto);
        productos.splice(index, 1);
        await fs.writeFile(
          path.resolve("./", this.nombreArchivo),
          JSON.stringify(productos, null, 2)
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    try {
      await fs.writeFile(
        path.resolve("./", this.nombreArchivo),
        JSON.stringify([], null, 2)
      );
    } catch (error) {
      console.log(error);
    }
  }
}

// I create a new instance of the class Contenedor
const contenedor = new Contenedor("productos.txt");

// I show in console the port where the server is listening

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// If there is an error, it will be printed in the console

server.on("error", (error) => {
  console.log("Error en el servidor:", error);
});

// I use the method 'get' to get all the products

app.get("/productos", async (req, res) => {
  const productos = await contenedor.getAll();
  res.json(productos);
});

// I create a function to get a random product from the array of products

app.get("/productoRandom", async (req, res) => {
  const productos = await contenedor.getAll();
  const producto = productos[Math.floor(Math.random() * productos.length)];
  res.json(producto);
});
