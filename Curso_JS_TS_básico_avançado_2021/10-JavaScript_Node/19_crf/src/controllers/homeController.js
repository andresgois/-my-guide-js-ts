   
exports.paginaInicial = (req,res) => {
    console.log(req.session.usuario)
    res.render('index', {
        titulo: 'Título',
        titulo2: '<span>titulo2</span>',
        numero: [1,2,3,4,5]
    });
    return;
};

exports.trataPost = (req,res) => {
    res.send('Ok');
};