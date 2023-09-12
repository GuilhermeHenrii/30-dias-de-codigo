function estock() {
  const btnAddCars = document.querySelector('.add-cars');
  const btnRmCars = document.querySelector('.rm-cars');
  let divCarsList = document.querySelector('.cars-list');
  const carsList = [];

  const events = (function () {
    btnAddCars.addEventListener('click', e => {
      addcars();
    });

    btnRmCars.addEventListener('click', e => {
      removeCars();
    })
  })();

  function addcars() {
    const car = prompt('Digite o carro que você deseja adicionar');

    if(car){
      carsList.push(car);
      showCars();
      return;
    }

    alert('Adicione pelo menos um carro');

  }

  function removeCars() {
    const car = prompt('Qual carro deseja remover ?');

    carsList.forEach(element => {
      if(element === car){
        const valueToDelete = carsList.indexOf(car);
        carsList.splice(valueToDelete, 1);
      }
    });

    showCars();
  }

  function showCars(){
    divCarsList.innerHTML = '';

    for(let car of carsList){
      divCarsList.innerHTML += ` ${car}`;
    }
  }
}

const control = estock();
