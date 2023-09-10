class Media {
  constructor() {
    this.av1 = document.querySelector('#nota-um');
    this.av2 = document.querySelector('#nota-dois');
    this.nome = document.querySelector('#nome');
    this.btn = document.querySelector('.btn');
  }

  events() {
    this.btn.addEventListener('click', e => {
      if(this.nome.value.length < 2){
        alert('Insira seu nome');
        return;
      }

      for (let result of document.querySelectorAll('.resultado')) {
        if (result.classList.contains('resultado')) {
          result.remove();
        }
      }

      this.calculaMedia();
    })
  }

  calculaMedia() {
    const av1 = Number(this.av1.value);
    const av2 = Number(this.av2.value);
    const media = (av1 + av2) / 2;
    this.mostraMedia(media);
  }


  mostraMedia(media) {
    const resultado = this.criadiv();
    resultado.innerHTML = `O aluno ${this.nome.value} teve a média: ${media}`;
  }

  criadiv() {
    const div = document.createElement('div');
    div.classList.add('resultado');
    const resultado = this.btn.insertAdjacentElement('afterend', div);
    return resultado;
  }
}


const aluno = new Media();
aluno.events()
