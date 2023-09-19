// Improvisar o exercício 16, aplicar e estudar o métodos do array

const cars = ['palio', 'sandero', 'prisma', 'onix', 'celta', 10, 55, 968, 'clio'];
const nomes = ['João', 'Vitor', 'Ana', 'Vitoria', 'Luan', 'Emily', 'Ana'];

const carsOld = [...cars];
const removedEnd = cars.pop();
const removedStart = cars.shift();

const addStart = carsOld.unshift('logan');
const addEnd = cars.push('fusca');

console.log(cars);
console.log(carsOld);


const cutArray = nomes.slice(1, 4);
console.log(cutArray);


const nome = 'Guilherme, Henrique, seila';
const nomesTwo = nome.split(',');
console.log();

for(let nome in nomesTwo){
  nomesTwo[nome] = nomesTwo[nome].trim();
}
console.log(nomesTwo);


const nomeTree = nomesTwo.join(' ');
console.log(nomeTree);


function mostraCarros(carro1, carro2, carro3){
  //console.log(carro1, carro2, carro3);
}

//mostraCarros(...cars);


function mostraCarrosTwo(...args){
  console.log(args[0]);
}

const objectNew = {nome:'luis', idade:25};
//mostraCarrosTwo(objectNew);


const array = [[1], [2], [3]];
const arrayb = [...array];
//arrayb.shift().shift();

//console.log(array, arrayb)

const arrayNow = [...cars, ...array];
//console.log(arrayNow);

const obj = {nome: 'gui'};
const objTwo = {sobrenome: 'henrique'};

const unitedObjects = {...obj, ...objTwo};
//console.log(unitedObjects);
