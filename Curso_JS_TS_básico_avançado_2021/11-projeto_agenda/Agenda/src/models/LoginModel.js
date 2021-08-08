const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
    email:{ type: String, required: true },
    password:{ type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login(){
        this.valida();
        if(this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email})

        if(!this.user){
            this.errors.push('Usuário não existe')
            return;
        }

        if(!bcrypt.compareSync(this.body.password, this.user.password)){
            this.errors.push('Senha inválida')
            this.user = null
            return;
        }
    }

    async register(){
        this.valida();
        await this.useExists();
        if(this.errors.length > 0) return;

        const salt = bcrypt.genSaltSync()
        this.body.password = bcrypt.hashSync(this.body.password, salt)
        this.user = await LoginModel.create(this.body);
    
    }

    valida(){
        this.cleanUp();
        // validação 
        // O e-mail precisa ser valido 
        if(!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido')
        }
        // senha entre 3 e 50
        if(this.body.password.length < 3 || this.body.password.length > 50){
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.')
        }
    }

    cleanUp(){
        for(let key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }

    async useExists(){
        this.user = await LoginModel.findOne({ email: this.body.email})
        if(this.user) this.errors.push('Usuários já existe')
    }

}

module.exports = Login