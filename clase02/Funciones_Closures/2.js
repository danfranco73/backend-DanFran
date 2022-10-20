//Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una lista con 3 números como argumento.

(function mostrarLista(parametros, funcion) {
    if (parametros.length > 0) {
        funcion(parametros);
    } else {
        console.log("Lista vacía");
    }
})([4, 5, 6], ar => ar.forEach(element => {
    console.log(element);
}
))//
