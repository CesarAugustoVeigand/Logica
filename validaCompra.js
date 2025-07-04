const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const saldo_disponivel = 100;

readline.question('Digite o valor da compra: ', (input) => {
  const valor_compra = parseFloat(input);

  if (isNaN(valor_compra) || valor_compra <= 0) {
    console.log("Valor inválido! Por favor, digite um número positivo.");
  } else {
    if (saldo_disponivel >= valor_compra) {
      const saldo_restante = saldo_disponivel - valor_compra;
      console.log(`Compra aprovada! Seu novo saldo é: ${saldo_restante.toFixed(2)}`);
    } else {
      console.log("Saldo insuficiente. A compra não pode ser realizada.");
    }
  }

  readline.close();
});
