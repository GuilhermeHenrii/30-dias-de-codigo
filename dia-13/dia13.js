class calculateAverage {
  constructor(){
    this.form = document.querySelector('.form');
    this.number = document.querySelector('#input-number');
    this.btn = document.querySelector('.btn-add');
    this.listOfNumbers = document.querySelector('.show-numbers');
    this.result = document.querySelector('.result')
    this.arrayNumbers = [];
  }

  events(){
    this.form.addEventListener('submit', e =>{
      e.preventDefault();
      this.addNumbers();
    })

    this.form.addEventListener('click', e => {
      const el = e.target;

      if(el.classList.contains('btn-calc')){
        this.calculate();
      }
    })
  }

  addNumbers(){
    const number = this.number.value;
    this.arrayNumbers.push(Number(number));
    this.showNumbers(number);
  }

  showNumbers(number){
    const p = this.createParagraph();
    p.classList.add('numbers');
    this.listOfNumbers.appendChild(p);

    p.innerHTML = number;
  }

  createParagraph(){
    const p = document.createElement('p');
    return p;
  }

  calculate(){
    const soma = this.arrayNumbers.reduce((ac, value) => ac + value, 0);
    const media = soma / this.arrayNumbers.length;
    const p = this.createParagraph();
    this.result.appendChild(p);

    p.innerHTML = media;
  }

}

const numbers = new calculateAverage();
numbers.events();
