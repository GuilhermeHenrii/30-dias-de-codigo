function calcMedia(){
  let av1;
  let av2;
  let av3;
  let av4;
  while(!av1 || av1 > 10){ // correto seria passar os valores de avs para number antes de verificar
    av1 = Number(prompt('AV1:'));
  }
  while(!av2 || av2 > 10){
    av2 = Number(prompt('AV2:'));
  }
  while(!av3 || av3 > 10){
    av3 = Number(prompt('AV3:'));
  }
  while(!av4 || av4 > 10){
    av4 = Number(prompt('AV4:'));
  }

  const media = (av1 + av2 + av3 + av4) / 4;
  document.write('Média: ' + media.toFixed(1));
}
let av10;
console.log(av10 > 10);
calcMedia()
