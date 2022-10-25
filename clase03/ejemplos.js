// Definiremos una función llamada operación que reciba como parámetro dos valores y una función con la operación que va a realizar. Deberá retornar el resultado.

// Path: clase03\ejemplos.js
const operacion1 = (a, b, operacion) => operacion(a, b);

console.log(operacion1(2, 3, (a, b) => a + b));
console.log(operacion1(2, 3, (a, b) => a - b));
console.log(operacion1(2, 3, (a, b) => a * b));
console.log(operacion1,( 3, (a, b) => a / b));

// Definiremos las siguientes funciones: suma, resta, multiplicación, división y módulo. Estas recibirán dos valores y devolverán el resultado. Serán pasadas como parámetro en la llamada a la función operación

// Path: clase03\ejemplos.js
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
const modulo = (a, b) => a % b;

console.log(operacion1(4, 8, suma));
console.log(operacion1(4, 8, resta));
console.log(operacion1(4, 8, multiplicacion));
console.log(operacion1(4, 8, division));
console.log(operacion1(4, 8, modulo));


// Todas las funciones tendrán que ser realizadas con sintaxis flecha

// Path: clase03\ejemplos.js
const operacion = (a, b, operacion) => operacion(a, b);

const suma1 = (a, b) => a + b;
const resta1 = (a, b) => a - b;
const multiplicacion1 = (a, b) => a * b;
const division1 = (a, b) => a / b;
const modulo1 = (a, b) => a % b;

console.log(operacion1(5, 10, suma1));
console.log(operacion1(5, 10, resta1));
console.log(operacion1(5, 10, multiplicacion1));
console.log(operacion1(5, 10, division1));
console.log(operacion1(5, 10, modulo1));


// 