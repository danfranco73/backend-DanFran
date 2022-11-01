// Array de objetos literal

const personas = [
    { nombre: 'Juan', edad: 23, altura: 1.75 },
    { nombre: 'Pedro', edad: 18, altura: 1.85 },
    { nombre: 'Ana', edad: 27, altura: 1.65 },
    { nombre: 'María', edad: 33, altura: 1.55 },
]


// A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
// B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.


// A
const numeros = []
for (let i = 0; i < 10000; i++) {
    numeros.push(Math.floor(Math.random() * 20 + 1))
}

// B
const numerosObj = {}
numeros.forEach(n => {
    // use ternary operator
    numerosObj[n] = numerosObj[n] ? numerosObj[n] + 1 : 1
})

console.log(numerosObj)


/* 
    if (numerosObj[n]) {
        numerosObj[n]++
    } else {
        numerosObj[n] = 1
    } */








