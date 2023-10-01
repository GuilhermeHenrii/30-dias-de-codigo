class Animals {
  constructor() {
    this.animalName = document.querySelector('#animal-name');
    this.sound = document.querySelector('.sound');
    this.sendBtn = document.querySelector('.send');
    this.registerBtn = document.querySelector('.register');
    this.statusRegister = document.querySelector('.status-register');
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
        if (!this.animalName.value){
          this.sound.style.color = 'red';
          this.sound.innerHTML = 'Animal não encontrado events';
        }

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
        this.animalRegister();
        this.toggleRegisterMode();
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

    if (saveObjAnimals.hasOwnProperty(enteredName)) {
      this.sound.style.color = 'black';
      return this.sound.innerHTML = saveObjAnimals[enteredName];
    }

    this.sound.style.color = 'red';
    return this.sound.innerHTML = 'Animal não encontrado';
  }


  animalRegister() {
    const animalName = document.querySelector('#animal-name-register');
    const animalSound = document.querySelector('#animal-sound-register');

    if(!animalName.value || !animalSound) {
      this.statusRegister.innerHTML = 'Registre um animal válido';
      return this.statusRegister.classList.add('error-on');
    }
    let savedAnimals = JSON.parse(localStorage.getItem('animals')) || {};
    savedAnimals[animalName.value] = animalSound.value;

    window.localStorage.setItem('animals', JSON.stringify(savedAnimals));

    this.statusRegister.classList.remove('error-on');
    this.statusRegister.innerHTML = 'Animal cadastrado';
    this.statusRegister.classList.add('success-on');
  }

  toggleRegisterMode() {
    this.saved = true;
    localStorage.setItem('saved', JSON.stringify(this.saved));
  }
}

const animal = new Animals();
animal.events();
