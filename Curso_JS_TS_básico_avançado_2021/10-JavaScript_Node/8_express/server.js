const express = require('express')
const app = express();


app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.send(`
     <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
     </form>
    `)
})
//http://localhost:3000/test/5/?nome=andre
app.get('/test/:id?/:nome', (req, res) => {
    const id = req.params.id;
    console.log(req.query);
    res.send(`id = ${id}`)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`Nome: ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Servidor rodando')
})