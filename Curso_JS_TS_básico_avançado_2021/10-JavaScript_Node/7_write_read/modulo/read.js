const fs = require('fs').promises;
const path = require('path');

//module.exports = (caminho) => fs.readFile(caminho,'utf8')
// ou
module.exports = (caminho) => {
    return fs.readFile(caminho,'utf8')
}
/*
const c = path.resolve(__dirname,'..','teste.json');
function texto() {
    const dados = fs.readFile(c, 'utf8')
    return dados;
}

texto().then(d => console.log(d)).catch(e => console.log('Error'))
*/