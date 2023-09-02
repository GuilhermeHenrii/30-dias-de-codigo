class WriteDayInFull {
    constructor() {
        this.dayText = document.querySelector('.show-day-text');
        this.monthText = document.querySelector('.show-month-text');
        this.date = new Date();
    }

    
    toWrite(){
        const todayDate = this.date.getDay();
        const currentMonth = this.date.getMonth();

        console.log(currentMonth);

        switch (todayDate){
            case 0:
                this.daytext.innerHTML = 'Domingo';
                break;

            case 1:
                this.dayText.innerHTML = 'Segunda-feira';
                break;

            case 2:
                this.dayText.innerHTML = 'Terça-feira';
                break;

            case 3:
                this.dayText.innerHTML = 'Quarta-feira';
                break;
            
            case 4:
                this.dayText.innerHTML ='Quinta-feira';
                break;

            case 5:
                this.dayText.innerHTML = 'Sexta-feira';
                break;
            case 6:
                this.dayText.innerHTML = 'Sábado';
                break;
        }

        switch (currentMonth){
            case 0:
                this.monthText.innerHTML = 'Janeiro';
                break;
            case 1: 
                this.monthText.innerHTML = 'Fevereiro';
                break;
            case 2: 
                this.monthText.innerHTML = 'Março';
                break;
            case 3: 
                this.monthText.innerHTML = 'Abril';
                break;
            case 4: 
                this.monthText.innerHTML = 'Maio';
                break;
            case 5: 
                this.monthText.innerHTML = 'Junho';
                break;
            case 6: 
                this.monthText.innerHTML = 'Julho';
                break;
            case 7: 
                this.monthText.innerHTML = 'Agosto';
                break;
            case 8: 
                this.monthText.innerHTML = 'Setembro';
                break;
            case 9: 
                this.monthText.innerHTML = 'Outubro';
                break;
            case 10: 
                this.monthText.innerHTML = 'Novembro';
                break;
            case 11: 
                this.monthText.innerHTML = 'Dezembro';
                break;
        }
    }
}

const day = new WriteDayInFull();
day.toWrite();