class Animals {
  constructor() {
    this.animalName = document.querySelector('#animal-name');
    this.sound = document.querySelector('.sound');
    this.sendBtn = document.querySelector('.send');
    this.arrAnimals = [{
      cachorro: 'auau',
      gato: 'miau',
      pardal: 'paspspiii',
      tucano: 'tuc tuc'

    }];
  }

  events() {
    this.sendBtn.addEventListener('click', e => {
      if(!this.animalName.value) return alert('Digite um animal válido');

      this.arrAnimals.forEach(element => {
        console.log(element);
        if(this.animalName.value == element.cachorro) soundShow();
      });

      return alert('Animal não encontrado');
    });
  }

  soundShow(){
    alert('cachorro');
  }
}

const animal = new Animals();
animal.events()
