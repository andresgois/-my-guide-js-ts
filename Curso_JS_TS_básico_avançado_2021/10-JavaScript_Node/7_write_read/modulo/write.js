const fs = require('fs').promises;

//fs.writeFile(caminhoArquivo, 'Frase 1', {flag: 'w', encoding: 'utf-8'})
//fs.writeFile(caminhoArquivo, 'Frase 1\n', {flag: 'a', encoding: 'utf-8'})

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w', encoding: 'utf-8'})
};
