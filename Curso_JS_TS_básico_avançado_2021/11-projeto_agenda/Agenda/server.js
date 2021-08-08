require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')
mongoose
    .connect(process.env.CONNECTSTRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('Conectado')
        app.emit('pronto')
    }).catch(e => console.log('Error'))
 
const session = require('express-session');
const MongoStore = require('connect-mongo')   
const flash = require('connect-flash')   
const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')
const { middlewareGlobal, checkCsrfError, csrfMiddleware }  = require('./src/middleware/mid');

app.use(helmet())
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'toy story',
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

app.use(csrf())
app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor rodando')
    })
})