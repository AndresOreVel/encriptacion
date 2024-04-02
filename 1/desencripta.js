const fs = require('fs');
const cryptoJs = require('crypto-js');

const dataEncript = fs.readFileSync('data.encript','utf-8');

const key = 'notas';

const bytes = cryptoJs.AES.decrypt(dataEncript, key);
const result = bytes.toString(cryptoJs.enc.Utf8);

fs.writeFileSync('result.txt', result,'utf-8');