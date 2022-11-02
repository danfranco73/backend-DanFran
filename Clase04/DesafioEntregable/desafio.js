// Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:
// save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
//getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
//getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
//deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
//deleteAll(): void - Elimina todos los objetos presentes en el archivo.
//Aspectos a incluir en el entregable:
//El método save incorporará al producto un id numérico por cada objeto, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
//Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente, sino crear el archivo
//Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
//Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
//Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído.
// formato de los productos: { title: 'Escuadra', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png' }


const fs = require("fs").promises;
const path = require("path");
/* attention, the file should be already created. Why is fs deprecated?
exists() is an anachronism and exists only for historical reasons. There should almost never be a reason to use it in your own code. In particular, checking if a file exists before opening it is an anti-pattern that leaves you vulnerable to race conditions: another process may remove the file between the calls to fs.  */

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

const contenedor = new Contenedor("productos.txt");

const main = async () => {
  await contenedor.save({
    title: "Escuadra",
    price: 123.45,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  });
  await contenedor.save({
    title: "Calculadora",
    price: 234.56,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  });
  await contenedor.save({
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  });
  const producto = await contenedor.getById(2);
  console.log(producto);
  const productos = await contenedor.getAll();
  console.log(productos);
  await contenedor.deleteById(1);
  await contenedor.deleteAll();
  const productos2 = await contenedor.getAll();
  console.log(productos2);
};

main();
