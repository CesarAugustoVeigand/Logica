const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const senha_correta = "12345";

readline.question('Digite sua senha: ', (senha_digitada) => {
  if (senha_digitada === senha_correta) {
    console.log("Login bem-sucedido!");
  } else {
    console.log("Senha incorreta. Tente novamente.");
  }
  readline.close();
});
