class WriteDayInFull {
    constructor() {
        this.text = document.querySelector('.show-text');
        this.date = new Date();
    }

    
    toWrite(){
        const todayDate = this.date.getDay();

        switch (todayDate){
            case 0:
                this.text.innerHTML = 'Domingo';
                break;

            case 1:
                this.text.innerHTML = 'Segunda-feira';
                break;

            case 2:
                this.text.innerHTML = 'Terça-feira';
                break;

            case 3:
                this.text.innerHTML = 'Quarta-feira';
                break;
            
            case 4:
                this.text.innerHTML ='Quinta-feira';
                break;

            case 5:
                this.text.innerHTML = 'Sexta-feira';
                break;
            case 6:
                this.text.innerHTML = 'Sábado';
                break;
        }
    }
}

const day = new WriteDayInFull();
day.toWrite();