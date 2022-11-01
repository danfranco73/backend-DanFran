// A) Guarde en un archivo llamado fyh.txt la fecha y hora actual.

const fs = require('fs');

try {
  const fyh = new date().toLocaleString();
  fs.writeFileSync('./fyh.txt', fyh , 'utf8')
  console.log('The file has been created and saved!');
} catch (error) {
  console.error('Error al crear el archivo');
}

// B) Lea nuestro propio archivo de programa y lo muestre por consola.

try {
  const data = fs.readFileSync('fyh.txt', 'utf8');
  console.log(data);
} catch (error) {
  console.error('Error al leer el archivo');
}

