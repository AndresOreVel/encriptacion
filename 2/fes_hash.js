const fs = require('fs');
const cryptoJS = require('crypto-js');

//Leo del archivo txt y guardo el resultado en la variable password
const password = fs.readFileSync('password.txt', 'utf8');

//Genero el hash y lo guardo en la variable hash
const hash = cryptoJS.SHA256(password).toString();

//Y lo escribo en el archivo correspondiente
fs.writeFileSync('hash.txt', hash, 'utf8'); 