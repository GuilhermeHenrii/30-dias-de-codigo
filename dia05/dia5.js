function Salute(){
    this.currentDate = new Date();
    this.textDynamic = document.querySelector('.dynamic-text');
    this.body = document.querySelector('.body');
}

Salute.prototype.showSalute = function(){
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const day = this.currentDate.getDate();
    const hours = this.currentDate.getHours();

    if(hours >= 0){
        this.body.classList.add('afternoon');
        this.textDynamic.innerHTML = 'Tenha um bom dia!'
    }

    if(hours >= 12){
        this.body.classList.add('morning');
        this.textDynamic.innerHTML = 'Tenha uma boa tarde!'
    }

    if(hours >= 18){
        this.body.classList.add('nigth');
        this.textDynamic.innerHTML = 'Tenha uma boa noite!'
    }
}

const user = new Salute();
user.showSalute();