const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const passwordFile = path.join(__dirname,'password.txt');
const hashFile = path.join(__dirname,'hash.txt');

const password = fs.readFileSync(passwordFile,'utf8').trim();

const hash = fs.readFileSync(hashFile,'utf8').trim();

//Leo del archivo password y guardo el resultado en una variable
const generateHash = crypto.createHash('sha256').update(password).digest('hex');
//Comparo el resultado con el contenido que tiene el archivo hash
if(generateHash === hash){
    console.log('El Has es correcto');
}else{
    console.log('El hash no es correcto');
}