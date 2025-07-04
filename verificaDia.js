function normalizarDia(dia) {
  // Remove acentos e coloca em minúsculas
  return dia.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function diaDaSemana() {
  const diasValidos = [
    "segunda", "terca", "quarta", "quinta", "sexta", "sabado", "domingo"
  ];

  let dia = "";

  do {
    dia = prompt("Digite o nome de um dia da semana (ex: Segunda, domingo):");
    
    if (dia === null) {
      alert("Operação cancelada.");
      return; // Sai da função se o usuário cancelar o prompt
    }
    
    dia = dia.trim();

    if (dia === "") {
      alert("Entrada vazia, por favor digite um dia válido.");
      continue;
    }

    dia = normalizarDia(dia);

    if (!diasValidos.includes(dia)) {
      alert("Dia inválido! Por favor, digite um nome de dia da semana válido.");
    }
  } while (!diasValidos.includes(dia));

  if (dia === "sabado" || dia === "domingo") {
    alert("É final de semana!");
  } else {
    alert("É dia de semana.");
  }
}

diaDaSemana();
