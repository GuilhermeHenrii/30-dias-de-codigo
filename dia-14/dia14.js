class Counter {
  constructor() {
    this.dec = document.querySelector('.dec');
    this.inc = document.querySelector('.inc');
    this.reset = document.querySelector('.reset');
    this.number = document.querySelector('.number');
  }

  events(){
    document.addEventListener('click', e => {
      const el = e.target;

      if(el.classList.contains('dec')){
        //alert('cheguei aq');
        this.decrease();
      }

      if(el.classList.contains('inc')){
        this.increment();
      }

      if(el.classList.contains('reset')){
        this.resetNumber();
      }

    })
  }

  decrease(){
    //alert('cheguei aqui decrementar');
    this.number.innerHTML = Number(this.number.innerHTML) - 1;
  }

  increment(){
    this.number.innerHTML = Number(this.number.innerHTML) + 1;
  }

  resetNumber(){
    this.number.innerHTML = 0;
  }
}

const cont = new Counter();
cont.events();
