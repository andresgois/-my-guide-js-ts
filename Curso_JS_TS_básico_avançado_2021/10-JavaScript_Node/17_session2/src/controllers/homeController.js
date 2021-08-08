// const HomeModel = require('../models/HomeModel')


// HomeModel.create({
//     titulo: 'Vingadores',
//     descricao: 'Um bom filme'
// })
//     .then(d => console.log(d))
//     .catch(e => console.log(e))

    
exports.paginaInicial = (req,res) => {
    //req.session.usuario = { nome: 'Andre', logado: true};
    console.log(req.session.usuario)
    // req.flash('info','Informação')
    // req.flash('error','Error')
    // req.flash('success','Sucesso')
    //console.log(req.flash('info'))
    res.render('index');
};

exports.trataPost = (req,res) => {
    res.send('Ok');
};