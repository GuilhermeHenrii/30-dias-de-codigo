class MiniTabuada{
    constructor(){
        this.inputFirstNumber = document.querySelector('#first');
        this.inputSecondNumber = document.querySelector('#second');
        this.inputAddition = document.querySelector('#add');
        this.inputSubtraction = document.querySelector('#sub');
        this.inputMultiplication = document.querySelector('#mult');
        this.inputDivision = document.querySelector('#divi');
        this.inputButton = document.querySelector('.btn');
        this.inputResponse = document.querySelector('.response');
    }

    events(){
        this.inputButton.addEventListener('click', () => {
           if(this.inputAddition.checked) this.addition();
           if(this.inputSubtraction.checked) this.subtraction();
           if(this.inputMultiplication.checked) this.multiplication();
           if(this.inputDivision.checked) this.division();
        })
    }

    addition(){
        const result = Number(this.inputFirstNumber.value) + Number(this.inputSecondNumber.value);
        this.inputResponse.innerHTML = result;
    }

    subtraction(){
        const result = Number(this.inputFirstNumber.value) - Number(this.inputSecondNumber.value);
        this.inputResponse.innerHTML = result;
    }

    multiplication(){
        const result = Number(this.inputFirstNumber.value) * Number(this.inputSecondNumber.value);
        this.inputResponse.innerHTML = result;
    }

    division(){
        const result = Number(this.inputFirstNumber.value) / Number(this.inputSecondNumber.value);
        this.inputResponse.innerHTML = result;
    }
}

const user = new MiniTabuada();
user.events();