const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

// HOME
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

// CONTATO
route.get('/contato', contatoController.paginaInicial)

module.exports = route;