class Calcula{
    constructor(){
        this.form = document.querySelector('.form');
        this.vend = document.querySelector('.vend');
        this.div = document.querySelector('.resposta');
    }

    events(){
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            
            const el = e.target;
            this.calculaMedia(el);
        });
    }

    calculaMedia(el){
        console.log(el.vendedor);
        const jan = Number(el.janeiro.value);
        const fev = Number(el.fevereiro.value);
        const mar = Number(el.marco.value);

        const media = (jan + fev + mar) / 3;

        return this.mostraMedia(media.toFixed(2));
    }

    mostraMedia(media){
        this.div.innerHTML =  `Olá ${this.vend.value}, a média de vendas desse trimestre é de: R$${media}`;
    }
}


const media = new Calcula();
media.events();