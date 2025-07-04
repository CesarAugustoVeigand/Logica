const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite um número inteiro: ', (input) => {
  const numero = parseInt(input, 10);

  if (isNaN(numero)) {
    console.log("Entrada inválida! Por favor, digite um número inteiro.");
  } else {
    if (numero > 0) {
      console.log("O número é positivo.");
    } else if (numero < 0) {
      console.log("O número é negativo.");
    } else {
      console.log("O número é zero.");
    }
  }

  readline.close();
});
