# Questão 1
dias_uteis = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
for dia in dias_uteis:
  print(dia)
print("Chegou o fim de semana!")

# Questão 4
lista_de_compras = [10.50, 22.00, 5.75, 15.20]
total = 0
for preco in lista_de_compras:
  total = total + preco
print("O valor total da sua lista de compras é de:", total)

# Questão 7
mensagens_nao_lidas = 5
while mensagens_nao_lidas > 0:
  print("Você tem", mensagens_nao_lidas, "mensagens não lidas.")
  print("Lendo uma mensagem...")
  mensagens_nao_lidas = mensagens_nao_lidas - 1
print("Você não tem mais mensagens não lidas. Fim.")

# Questão 10
meta = 100
economizado = 0
semanas = 0
while economizado < meta:
  economizado = economizado + 10
  semanas = semanas + 1
  print("Semana", semanas, "- Economizado: R$", economizado)
print("Parabéns! Você alcançou sua meta em", semanas, "semanas.")

# Questão 13
lista_de_alunos = ["Ana", "Pedro", "Maria", "João", "Carlos"]
aluno_procurado = "Maria"
encontrado = False
for aluno in lista_de_alunos:
  if aluno == aluno_procurado:
    print(aluno_procurado, "está na lista!")
    encontrado = True
    break
if not encontrado:
  print(aluno_procurado, "não foi encontrado na lista.")
