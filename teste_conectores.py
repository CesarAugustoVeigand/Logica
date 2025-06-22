# Sistema para classificar produtos por faixa de custo

# Solicita o preço do produto ao usuário
preco = float(input("Digite o preço do produto (em R$): "))

# Verifica em qual prateleira o produto se enquadra
if preco <= 100:
    print("Este produto é de *baixo custo* e deve ir na prateleira correspondente.")
elif preco <= 500:
    print("Este produto é de *médio custo* e deve ir na prateleira correspondente.")
else:
    print("Este produto é de *alto custo* e deve ir na prateleira correspondente.")
