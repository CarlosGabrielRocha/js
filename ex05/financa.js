let saldo = parseFloat(prompt('Qual é a quantidade de dinheiro disponível?'))
let option 
do {
   option = parseInt(prompt(`SALDO DISPONÍVEL:   R$${saldo}.\nOPÇÕES\n-Adicionar[1]\n-Remover[2]\n-Sair[3]`))
   switch(option) {
    case 1:
        saldo += parseFloat(prompt(`Digite o valor a ser Adicionado:`))
    break
    case 2:
        saldo -= parseFloat(prompt(`Digite o valor a ser Removido:`))
    break
    case 3:
        alert(`Saindo..`)
    default:
        alert(`Opção inválida`)
   }
} while (option != 3)