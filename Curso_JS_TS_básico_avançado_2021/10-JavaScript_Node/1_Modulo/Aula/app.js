const mod = require('./mod1');
const path = require('path');


//let nome = mod.falaNome();


//console.log(mod(2,5));
//console.log(__filename);
//console.log(__dirname);

// Diretório atual
console.log(__dirname)
// sobe um diretório e entra no funcao\exec
console.log(path.resolve(__dirname, '..','funcao','exec'))