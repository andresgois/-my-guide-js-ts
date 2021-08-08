const HomeModel = require('../models/HomeModel')


HomeModel.create({
    titulo: 'Vingadores',
    descricao: 'Um bom filme'
})
    .then(d => console.log(d))
    .catch(e => console.log(e))

    
exports.paginaInicial = (req,res) => {
    res.render('index');
};

exports.trataPost = (req,res) => {
    res.send('Ok');
};