//Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores


let crearMultiplicador = n => {
    return m => n * m;
}


let duplicar = crearMultiplicador(2);

console.log(duplicar(5)); // me daría 10

let triplicar = crearMultiplicador(3);

console.log(triplicar.error); // probando que no existe el atributo error

console.log(triplicar(3)); // debería dar 9



