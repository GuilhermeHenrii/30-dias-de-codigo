function calculaCargaHoraria(){
    const inputName = document.querySelector('.name');
    const inputWorkedHours = document.querySelector('.workload')
    const btn = document.querySelector('.btn');

    
    function generatesError(field, msg){
        const divError = document.createElement('div');
        divError.classList.add('msg-error');
        divError.innerText = msg;
        field.insertAdjacentElement('afterend', divError);

        field.classList.add('field-error');
    }


    btn.addEventListener('click', e =>{
        if(inputName.value.length <= 0){
            generatesError(inputName, `Esse campo não pode estar vazio`);
            return;
        }

        if(inputWorkedHours.value.length <= 0){
            generatesError(inputWorkedHours, `Esse campo não pode estar vazio`);
            return;
        }

        //checar qual input radio estara selecionado e fazer o calculo a partir desse dado
        // if(){

        // }
    });
}

calculaCargaHoraria();