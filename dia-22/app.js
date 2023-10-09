function escreveNaTela(){
  const nome = prompt('Digite seu nome');
  if(!nome) return;
  document.write(nome);
}

escreveNaTela();
