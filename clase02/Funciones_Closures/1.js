//Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”. Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos

function mostrarLista(parametros, funcion) {
    if (parametros.length > 0) {
        funcion(parametros);
    } else {
        console.log("Lista vacía");
    }
}

const personas = ["Andres", "Sabrina", "Martin", "Florencia", "Carolina"]
const vacia = []

mostrarLista(personas, ar => ar.forEach(element => {
    console.log(element);
}
))

mostrarLista(vacia, ar => console.log(JSON.stringify(ar)))


