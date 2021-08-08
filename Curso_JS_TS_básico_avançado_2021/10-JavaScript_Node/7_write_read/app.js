const path = require('path');
//const caminhoArquivo = path.resolve(__dirname, '..','teste.txt');
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const escreve = require('./modulo/write')
const ler = require('./modulo/read')

/*
    const pessoas = [
        {nome: 'João'},
        {nome: 'Andre'},
        {nome: 'Lucas'},
        {nome: 'Maria'},
    ];

    const json = JSON.stringify(pessoas,'',2)
    escreve(caminhoArquivo, json) 
*/

async function lerArquivo(caminho){
    const dados = await ler(caminho)
    rederiza(dados)
}
 function rederiza(dados){
     //console.log(dados)
     dados = JSON.parse(dados)
     dados.forEach(v => console.log(v.nome))
 }

 lerArquivo(caminhoArquivo);
