import Cpf from './Cpf.js';

class ValidaCandidatoCnh{
    constructor(){
        this.form = document.querySelector('.form');
    }

    events(){
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            const el = e.target;

            this.validates(el);
        });
    };

    validates(el){
        this.validateName(el);
        this.validateCpf(el);
        this.validateEmail(el);
        this.validateDate(el);
    }


    validateName(el){
        const name = el.name.value;

        if(name.length >= 50 || name !== 'string'){
            alert('Nome inválido');
            return;
        }
    }

    validateCpf(el){
        el = new Cpf();

    }

    validateEmail(el){

    }

    validateDate(el){

    }

}