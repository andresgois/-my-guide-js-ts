require('dotenv').config();

const express = require('express')
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTSTRING, {useNewUrlParser: true ,useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado')
        app.emit('pronto')
    }).catch(e => console.log('Error'))


const routes = require('./routes')
const path = require('path')
const mid  = require('./src/middleware/mid')

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')))
// aula 16
// todas as requisições pegam esse middleware
//app.use(mid)

app.set('views', path.resolve(__dirname, 'src','views'))
app.set('view engine', 'ejs')

app.use(routes)

app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor rodando')
    })
})