// Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres.Al finalizar, debe invocar a la siguiente función que se le pasa también  como parámetro: const fin = () => console.log('terminé') Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen.

function mostrarLetras(mensaje) {
    let i = 0;
    let intervalo = setInterval(() => {
        console.log(mensaje[i]);
        if (i >= mensaje.length) {
            clearInterval(intervalo);
            fin();
            }i++;
        }, 1000);
}

const fin = () => console.log('terminé');

setTimeout(mostrarLetras, 0, 'Hola');
setTimeout(mostrarLetras, 250, 'Hola');
setTimeout(mostrarLetras, 500, 'Hola');



