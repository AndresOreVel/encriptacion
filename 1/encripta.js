const fs = require('fs');
const cryptoJS = require('crypto-js');

const inputFile = 'data.txt';
const outputFile = 'data.encript';

// Leo el contenido de manera asíncrona
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  //Encripto los datos y los guardo en una variable
  const cipher = cryptoJS.AES.encrypt(data,'notas').toString();

  // Guardo los datos en el archivo encriptado de manera asíncrona
  fs.writeFileSync(outputFile, cipher, 'utf8', (err) => {
    if (err) {
      console.error('Error al escribir el archivo encriptado:', err);
      return;
    }
    console.log('Encriptación completada.');
  });
});
