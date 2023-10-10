function operacaoCalcPercent(operacao, porcentagem, valor) {
  const calcPorcentagem = (valor * porcentagem) / 100;

  if (operacao === 'Acrescimo') {
    const valorToral = valor + calcPorcentagem;
    document.write(valorToral);
  } else if (operacao === 'Desconto') {
    const valorTotal = valor - calcPorcentagem;
    document.write(valorTotal);
  }

  return document.write(`<br>Valor Total antes da operação:${valor} <br>Desconto / Acrescimo: ${calcPorcentagem}`);
}

operacaoCalcPercent('Acrescimo', 66, 1000);
