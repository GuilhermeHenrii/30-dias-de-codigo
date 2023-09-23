class Animals {
  constructor() {
    this.animalName = document.querySelector('#animal-name');
    this.sound = document.querySelector('.sound');
    this.sendBtn = document.querySelector('.send');
    this.registerBtn = document.querySelector('.register');
    this.saved = JSON.parse(localStorage.getItem('saved')) || false;
    this.getSaved;
    this.objAnimals = {
      cachorro: 'late',
      gato: 'mia',
      passaro: 'canta',
      boi: 'mugi',
      urso: 'rugi'
    };
  }

  events() {
    document.addEventListener('click', e => {
      const el = e.target;

      if (el.classList.contains('send')) {
        if (!this.animalName.value) return alert('Digite um animal válido');

        const enteredName = this.animalName.value;

        if (this.objAnimals.hasOwnProperty(enteredName)) {
          return this.showSavedSound();
        }
        else if (this.saved) {
          return this.showCreatedSound();
        }
        else if (!this.objAnimals.hasOwnProperty(enteredName)) {
          this.sound.style.color = 'red';
          this.sound.innerHTML = 'Animal não encontrado';
        }
      }

      if (el.classList.contains('register')) {
        console.log('aqui');
        this.animalRegister();
        this.toggleRegisterMode();
        console.log(this.getSaved);
        console.log(this.ObjAnimals);
      }

      if (this.getSaved === 'true' && el.classList.contains('send')) {
        this.showCreatedSound();
      }
    });
  }

  showSavedSound() {
    const enteredName = this.animalName.value;
    if (this.objAnimals.hasOwnProperty(enteredName)) {
      this.sound.style.color = 'black';
      return this.sound.innerHTML = this.objAnimals[enteredName];
    }
  }

  showCreatedSound() {
    const enteredName = this.animalName.value;

    const saveStringAnimals = window.localStorage.getItem('animals');
    const saveObjAnimals = JSON.parse(saveStringAnimals);
    console.log(saveObjAnimals.cachorro);

    console.log(saveStringAnimals);

    if (saveObjAnimals.hasOwnProperty(enteredName)) {
      this.sound.style.color = 'black';
      return this.sound.innerHTML = saveObjAnimals[enteredName];
    }

    this.sound.style.color = 'red';
    return this.sound.innerHTML = 'Animal não encontrado';
  }


  animalRegister() {
    console.log(this.objAnimals);
    const animalName = document.querySelector('#animal-name-register');
    const animalSound = document.querySelector('#animal-sound-register');

    //criar alguma funcionalidade que adicione itens no objeto sem reatribuir todo seu valor
    // this.objAnimals[animalName.value] = animalSound.value;

    Object.assign(this.objAnimals, {[animalName.value]: animalSound.value})

    window.localStorage.setItem('animals', JSON.stringify(this.objAnimals));
    console.log(this.objAnimals);
  }

  toggleRegisterMode() {
    this.saved = !this.saved;
    localStorage.setItem('saved', JSON.stringify(this.saved));
  }
}

const animal = new Animals();
animal.events();
