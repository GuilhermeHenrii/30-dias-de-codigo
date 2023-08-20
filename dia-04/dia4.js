import Cpf from './Cpf.js';

class ValidaCandidatoCnh{
    constructor(){
        this.form = document.querySelector('.form');
        this.valid = true;
    }


    events(){
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            console.log(this.form)
            const el = e.target;

            console.log(el);

            this.validates(el);
        });
    };

    validates(el){
        this.validateName(el);
        if(this.valid === true) this.validateCpf(el);
        if(this.valid === true) this.validateNumberPhone(el);
        if(this.valid === true) this.validateEmail(el);
        if(this.valid === true) this.validateDate(el);

        if(this.valid === true) alert('candidato apto para tirar cnh');

        if(this.valid === false) alert('candidato inapto para tirar cnh')
    }


    validateName(el){
        const name = el.name.value;
        console.log(name.length);

        if(name.length <= 0){
            alert('Nome vazio');
            return this.valid = false;;
        }

        if(name.length >= 50 || typeof name !== 'string'){
            alert('Nome inválido');
            return this.valid = false;;
        }

        return this.valid = true;
    }

    validateCpf(el){
        const cpf = el.cpf.value;
        const validateCpfCheck = new Cpf(cpf);

        if(!validateCpfCheck.validate()) {
            alert('cpf invalido');
            return this.valid = false;
        }

        return this.valid = true;
    }

    validateNumberPhone(el){
        console.log(el.tel.value);
        if(!validator.isMobilePhone(el.tel.value, 'pt-BR')){
            alert('telefone inválido');
            return this.valid = false;
        }

        return this.valid = true;
    }

    validateEmail(el){
        const email = el.email.value;

        if(!validator.isEmail(email)){
            alert('email invalido');
            return this.valid = false;;
        }

        return this.valid = true;
    }

    validateDate(el){
        const date = new Date(el.date.value);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

        const currentDate = new Date();

        let ageYears  = currentDate.getFullYear() - date.getFullYear();

        let ageMonths = currentDate.getMonth() - date.getMonth();

        let ageDay = currentDate.getDate() - date.getDate();


        //estudar essa lógica
        if (ageMonths < 0 || (ageMonths === 0 && ageDay < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    
    if (ageDay < 0) {
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
        ageDay = lastMonth.getDate() - date.getDate() + currentDate.getDate();
        ageMonths--;
    }

        // const age = new Date(ageYears, ageMonths, ageDay);
        console.log(ageDay, ageMonths, ageYears);


        if(!ageYears || ageYears < 18) return this.valid = false;

        if(ageYears >= 18) return this.valid = true;
        
    }

}

const candidate = new ValidaCandidatoCnh();
candidate.events();