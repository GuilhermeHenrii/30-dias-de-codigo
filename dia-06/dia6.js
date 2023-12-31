function calculaCargaHoraria(){
    const inputName = document.querySelector('.name');
    const inputWorkedHours = document.querySelector('.workload')
    const btn = document.querySelector('.btn');
    const form = document.querySelector('.form');
    const weekly = document.querySelector('.weekly');
    const monthly = document.querySelector('.monthly');
    const divRadio = document.querySelector('.div-radio')
    const extraHours = document.querySelector('.extra-hours');
    const hoursValue = document.querySelector('.hours-value');
    const totalHours = Number(extraHours.value + inputWorkedHours.value);
    
    
    function generatesFieldError(field, msg){
        const divError = document.createElement('div');
        divError.classList.add('msg-error');
        divError.innerText = msg;
        field.insertAdjacentElement('afterend', divError);

        field.classList.add('field-error');
    }

    function generatesTextError(field, text){
        const divError = document.createElement('div');
        divError.classList.add('msg-error');

        divError.innerHTML = text;
        
        field.insertAdjacentElement('beforeend', divError);
    }


    function createDiv(text){
        const div = document.createElement('div');
        btn.insertAdjacentElement('afterend', div);
        div.classList.add('info-text');

        div.innerHTML = text;

        return div;
    }

    function calculateHoursWorked(){
        const calculateHours = Number(hoursValue.value * inputWorkedHours.value);
        const calculateOvertime = Number(hoursValue.value * 1.5) * extraHours.value;

        createDiv(`Você fez R$${calculateHours} e ${calculateOvertime} de horas extras`);
    }


    function calculateWeekly(){
        let valid = true;

        if(extraHours.value > 12){
            generatesTextError(form, `Máximo permitido por semana são 12 horas extras.`);
            valid = false;
            return;
        }

        if(totalHours >= 56){
            console.log(totalHours);
            generatesTextError(form, `Máximo permitido por semana com hora extra são 56 horas trabalhadas.`);
            valid = false;
            return;
        }

        if(inputWorkedHours.value < 44 && extraHours.value >= 1){
            generatesFieldError(extraHours, `Horas extras só são contabilizadas após as 44 horas horas trabalhadas na semana.`);
            valid = false;
            return;
        }

        if(inputWorkedHours.value > 44){
            generatesTextError(form, `Máximo permitido por semana sem hora extra são 44 horas trabalhadas.`);
            valid = false;
            return;
        }

        if(inputWorkedHours.value <= 44){
            createDiv(`Voce trabalhou ${inputWorkedHours.value} horas na semana. Você deve ${44 - Number(inputWorkedHours.value)} horas. Horas extras na semana: ${extraHours.value}`);
            valid = true;
        }

        if(valid === true) calculateHoursWorked();
    }


    function calculateMonthly(){
        let valid = true;

        if(extraHours.value > 60){
            generatesTextError(form, `Máximo permitido por mês são 60 horas extras.`);
            let valid = false;
            return;
        }

        if(totalHours >= 280){
            generatesTextError(form, `Máximo permitido por mês são 280 horas trabalhadas.`);
            let valid = false;
            return;
        }

        if(inputWorkedHours.value > 220 && extraHours.value >= 1){
            generatesFieldError(extraHours, `Horas extras só podem ser contabilizadas após as 220 horas trabalhadas no mês.`);
            let valid = false;
            return;
        }

        if(inputWorkedHours.value > 220){
            generatesTextError(form, `Máximo permitido por mês sem hora extra são 220 horas trabalhadas.`);
            let valid = false;
            return;
        }

        if(inputWorkedHours.value <= 220){
            createDiv(`Você trabalhou ${inputWorkedHours.value} horas no mês. Você deve ${220 - Number(inputWorkedHours.value)} horas.`)
        }

        if(valid === true) calculateHoursWorked();
    }



    btn.addEventListener('click', e =>{
        for(let txt of form.querySelectorAll('.info-text')){
            txt.remove();
        }

        for(let fieldError of form.querySelectorAll('.field-error')){
            fieldError.classList.remove('field-error');
        }

        for(let msgError of form.querySelectorAll('.msg-error')){
            msgError.remove();
        }

        if(inputName.value.length <= 0){
            generatesFieldError(inputName, `Esse campo não pode estar vazio`);
            return;
        }

        if(inputWorkedHours.value.length <= 0){
            generatesFieldError(inputWorkedHours, `Esse campo não pode estar vazio`);
            return;
        }

        //checar qual input radio estara selecionado e fazer o calculo a partir desse dado
        if(!weekly.checked && !monthly.checked){
            generatesFieldError(divRadio, `Selecione uma opção`)
            return;
        }

        if(weekly.checked) calculateWeekly();
        if(monthly.checked) calculateMonthly();
    });
}

calculaCargaHoraria();