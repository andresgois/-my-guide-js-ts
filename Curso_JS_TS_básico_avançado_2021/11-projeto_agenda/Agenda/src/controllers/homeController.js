const Contato = require('../models/ContatoModel')


exports.index = async (req,res) => {
    const contato = await Contato.buscaContatos()
    res.render('index', { contato });
};