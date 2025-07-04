const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarIdade() {
  readline.question('Digite a idade da pessoa: ', (input) => {
    const idade = Number(input);

    if (isNaN(idade)) {
      console.log('Entrada inválida: por favor, digite um número.');
    } else if (idade < 0) {
      console.log('Idade inválida: não pode ser negativa.');
    } else if (idade > 120) {
      console.log('Idade inválida: valor muito alto para idade humana.');
    } else {
      if (idade >= 18) {
        console.log(`Com ${idade} anos, você é maior de idade.`);
      } else {
        console.log(`Com ${idade} anos, você é menor de idade.`);
      }
    }

    readline.close();
  });
}

verificarIdade();
