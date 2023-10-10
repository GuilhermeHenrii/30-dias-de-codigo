function calcMedia(n1, n2){
  return (n1 + n2) / 2;
}

const n1 = Number(prompt('Digite o primeiro número: '));
const n2 = Number(prompt('Digite o segundo número: '));

const result = calcMedia(n1, n2);
document.write(result);
