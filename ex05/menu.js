
let option
do {
  option = parseInt(prompt(`MENU\n-Opção[1]\n-Opção[2]\n-Opção[3]\n-Opção[4]\n-Encerrar[5]`))
  switch(option) {
    case 1:
        alert('Você escolheu a Opção [1]')
    break
    case 2:
        alert('Você escolheu a Opção [2]')
    break
    case 3:
        alert('Você escolheu a Opção [3]')
    break
    case 4:
        alert('Você escolheu a Opção [4]')
    break
    case 5:
        alert('Você escolheu a opção [5]')
        alert('Encerrando..')
    break
    default:
        alert('Opção inválida')
  }
} while (option != 5)