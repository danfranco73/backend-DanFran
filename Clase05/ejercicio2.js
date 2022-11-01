const productos = [
  { id: 1, nombre: "Escuadra", precio: 323.45 },
  { id: 2, nombre: "Calculadora", precio: 234.56 },
  { id: 3, nombre: "Globo Terráqueo", precio: 45.67 },
  { id: 4, nombre: "Paleta Pintura", precio: 456.78 },
  { id: 5, nombre: "Reloj", precio: 67.89 },
  { id: 6, nombre: "Agenda", precio: 78.9 },
];

//A) Los nombres de los productos en un string separados por comas.
//B) El precio total
//C) El precio promedio
//D) El producto con menor precio
//E) El producto con mayor precio
//F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola

//A
const nombres = productos.map((p) => p.nombre);
//B
const precioTotal = productos.reduce((acum, p) => acum + p.precio, 0);
//C
let  precioPromedio = 0;
if (productos.length > 0) {
  precioPromedio = precioTotal / productos.length;
} else {
  throw new Error("No hay productos");
}

//D
const menorPrecio = productos.reduce((acum, p) =>
  acum.precio < p.precio ? acum : p
);
//E
const mayorPrecio = productos.reduce((acum, p) =>
  acum.precio > p.precio ? acum : p
);
//F
const productosObj = productos.reduce((acum, p) => {
  acum[p.id] = p;
  return acum;
}, {});

const info = {
    nombres: nombres.join(", "),
    precioTotal: precioTotal.toFixed(2),
    precioPromedio: precioPromedio.toFixed(2),
    menorPrecio: menorPrecio,
    mayorPrecio: mayorPrecio,
    productosObj: productosObj
}

console.log(info)