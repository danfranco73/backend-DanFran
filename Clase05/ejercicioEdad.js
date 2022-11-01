//Realizar un proyecto en node.js que permita calcular cuántos años y días totales transcurrieron desde la fecha de tu nacimiento. Para ello utilizar la dependencia moment instalándola en forma local desde npm. Imprimir los resultados por consola. Hacer las modificaciones necesarias para que sólo se actualicen los patches para la librería recién instalada.

//Un ejemplo de salida:
//Hoy es 11/01/2021
//Nací el 29/11/1968
//Desde mi nacimiento han pasado 52 años.
//Desde mi nacimiento han pasado 19036 días.

//Importo la librería moment
const moment = require('moment');

//Defino la fecha de nacimiento
const fechaNacimiento = moment('1969-06-16');

//Defino la fecha actual
const fechaActual = moment();

//Calculo la diferencia de años
const diferenciaAnios = fechaActual.diff(fechaNacimiento, 'years');

//Calculo la diferencia de días
const diferenciaDias = fechaActual.diff(fechaNacimiento, 'days');

//Imprimo los resultados
console.log(`Hoy es ${fechaActual.format('DD/MM/YYYY')}`);
console.log(`Nací el ${fechaNacimiento.format('DD/MM/YYYY')}`);
console.log(`Desde mi nacimiento han pasado ${diferenciaAnios} años.`);
console.log(`Desde mi nacimiento han pasado ${diferenciaDias} días.`);
