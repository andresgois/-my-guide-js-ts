const nome = 'andre'
const sobrenome = 'gois'


const falaNome = () => {
    console.log(nome, sobrenome);
}

//console.log(module);
//console.log(module.exports);

exports.nome = nome;
exports.falaNome = falaNome;

module.exports = (x,y) => {
    return x * y;
};