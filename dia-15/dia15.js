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
    const indexCar = prompt('Digite o índice do carro que deseja remover');
    const arrayCarsSplice = carsList.splice(Number(indexCar) - 1, 1);
    console.log(arrayCarsSplice);

    showCars();
  }

  function showCars(){
    divCarsList.innerHTML = '';

    for(let car = 0; car <= carsList.length -1; car++){
      divCarsList.innerHTML += ` ${carsList[car]} ${car + 1}`;
    }
  }
}

const control = estock();
