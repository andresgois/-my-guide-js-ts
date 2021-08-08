import validator from "validator";

export default class Login{
    constructor(formCLass){
        this.form = document.querySelector(formCLass)
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            //alert('ok')
            this.validate(e)
        })
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')
        //console.log(emailInput)
        let erro = false

        if(!validator.isEmail(emailInput.value)){
            alert('Email inválido')
            erro = true
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            alert('Senha precisa ter entre 3 e 50 caracteres')
            erro = true
        }
        if(!erro) el.submit();

    }
}