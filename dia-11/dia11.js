class Contador {
  constructor() {
    this.contador = 0;
    this.resp = document.querySelector('.resp');
    this.run = false;
  }

  events(){
    document.addEventListener('click', e => {
      const el = e.target;

      if(this.run === false && el.classList.contains('btn-prog')) {
        this.run = true;
        this.contagemProgressiva();
      }else if (el.classList.contains('btn-prog')) {
        alert('Espere a contagem terminar');
      }

      if(this.run === false && el.classList.contains('btn-reg')){
        this.run = true;
        this.contagemRegressiva();
      } else if(el.classList.contains('btn-reg')) {
        alert('Espere a contagem acabar');
      }

    });

  }

  contagemProgressiva() {
    const numProgInit = document.querySelector('#num-prog-init');
    const numProgFinaly = document.querySelector('#num-prog-finaly');

    let cont = Number(numProgInit.value);

      const intervalId = setInterval(() => {
        if(cont <= Number(numProgFinaly.value)) {
          this.resp.innerHTML += ` ${cont}`;
          cont++;
        } else{
          clearInterval(intervalId);
          this.run = false;
        }
      }, 1000);
  }

  contagemRegressiva(){
    const numRegInit = document.querySelector('#num-reg-init');
    const numRegFinaly = document.querySelector('#num-reg-finaly');

    let cont = Number(numRegInit.value);

    const intervalId = setInterval( () => {
      if(cont >= Number(numRegFinaly.value)){
        this.resp.innerHTML += ` ${cont}`;
        cont--;
      }else {
        clearInterval(intervalId);
        this.run = false;
      }
    }, 1000);
  }
}

const user = new Contador();
user.events();
