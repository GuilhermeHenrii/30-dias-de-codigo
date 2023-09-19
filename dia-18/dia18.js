class Animals {
  constructor() {
    this.arrAnimals = ['cachorro', 'Gato', 'pardal', 'tucano'];
  }

  events() {
    const animal = prompt('Digite um animal (sem acento e minusculo): ');
    console.log(animal);

    if(animal === this.arrAnimals[0]){
      alert('ok');
    }
  }
}

const animal = new Animals();
animal.events()
