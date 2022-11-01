const fs= require('fs')

// Ejecución sincrónica

// Lectura de un archivo
/* try {
    const data = fs.readFileSync('data.csv', 'utf8')
    console.log(data)
} catch (err) {
    console.error(err)
} */

// Escritura sincrónica
/* try {
    fs.writeFileSync('data.csv', 'Hello Node.js', 'utf8')
    console.log('The file has been saved!')
} catch (err) {
    console.error(err)
} */

// Eliminación sincrónica

/* try {
    fs.unlinkSync('data.csv')
    console.log('The file has been deleted!')
} catch (err) {
    console.error(err)
} */

// Creación de un directorio

/* try {
    fs.mkdirSync('nuevo')
    console.log('The directory has been created!')
} catch (err) {
    console.error(err)
} */

// Creación de un directorio y un archivo

try {
    fs.mkdirSync('FileSystem')
    fs.writeFileSync('FileSystem/data.csv', 'Usando el Node.js', 'utf8')
    console.log('The directory and the file have been created!')
} catch (err) {
    console.error(err)
}