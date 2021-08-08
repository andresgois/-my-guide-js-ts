require('dotenv').config();

const express = require('express')
const app = express();
const mongoose = require('mongoose')

mongoose
    .connect(process.env.CONNECTSTRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log('Conectado')
        app.emit('pronto')
    }).catch(e => console.log('Error'))
 

const routes = require('./routes')
const path = require('path')
const mid  = require('./src/middleware/mid');

const session = require('express-session');
const MongoStore = require('connect-mongo')//(session)    
const flash = require('connect-flash')   

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')))
// todas as requisições pegam esse middleware
//app.use(mid)

const sessionOptions = session({
    secret: 'toy story',
    //store: new MongoStore({mongooseConnection: mongoose.connection}),
    store: MongoStore.create({ mongoUrl: process.env.CONNECTSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src','views'))
app.set('view engine', 'ejs')

app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor rodando')
    })
})