
function addPlayer() {

    const menu = document.getElementById('menu')
    
    const ul = document.createElement('ul')

    // Informar a posição do jogador

    const liPosition = document.createElement('li')
    const inputPosition = document.createElement('input')
    inputPosition.type = 'text'
    inputPosition.name = 'posicaoJogador'
    inputPosition.id = 'posicao'
    const labelPosition = document.createElement('label')
    labelPosition.innerText = 'Informe a posição do jogador: '
    labelPosition.htmlFor = 'posicao'

    liPosition.append(labelPosition, inputPosition)

    // Informar o nome do jogador

    const liName = document.createElement('li')
    const inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.name = 'nomeJogador'
    inputName.id = 'nome'
    const labelName = document.createElement('label')
    labelName.innerText = 'Informe o nome do jogador: '
    labelName.htmlFor = 'nome'

    liName.append(labelName, inputName)

    // Informar o número da camisa do jogador

    const liShirt = document.createElement('li')
    const inputShirt = document.createElement('input')
    inputShirt.type = 'number'
    inputShirt.Shirt = 'camisaJogador'
    inputShirt.id = 'camisa'
    inputShirt.min = 1
    inputShirt.max = 45
    inputShirt.value = 1
    const labelShirt = document.createElement('label')
    labelShirt.innerText = 'Informe a camisa do jogador: '
    labelShirt.htmlFor = 'camisa'

    liShirt.append(labelShirt, inputShirt)

    // Escalar

    const button = document.createElement('button')
    button.textContent = 'Escalar'
    
    ul.append(liPosition, liName, liShirt, button)
    menu.appendChild(ul)
    
    button.addEventListener('click', function() {
        escalar(inputPosition.value, inputName.value, inputShirt.value)
        menu.removeChild(ul)
    })
    
}

function escalar(position, pName, shirt) {
   const add = confirm(`Tem certeza que deseja escalar o jogador com as informações:\nPosição do jogador: ${position}\nNome do jogador: ${pName}\nCamisa do jogador: ${shirt}`)

   if(add === true) {

    const list = document.getElementById('players')
    const ul = document.createElement('ul')
    ul.id = 'escalados'
    const liPosition = document.createElement('li')
    const liName = document.createElement('li')
    const liShirt = document.createElement('li')

    const inputPosition = document.getElementById('posicao')
    const inputName = document.getElementById('nome')
    const inputShirt = document.getElementById('camisa')

    liName.innerText = (`Nome do jogador: ${inputName.value}`)
    liPosition.innerText = (`Posição do jogador: ${inputPosition.value}`)
    liShirt.innerText = (`Camisa do jogador: ${inputShirt.value}`)
    ul.append(liName, liPosition, liShirt)
    list.appendChild(ul)

    alert('Jogador adicionado com sucesso!')

   } 
}

// terminar

function removePlayer() {
    const ul = querySelectorAll('ul#escalados')
    const li = ul.querySelectorAll('li')

    const playerToRemove = prompt('Digite o número da camisa do jogador que você deseja remover:')

    li.forEach(function(elemento) {
        if(elemento.value === playerToRemove) {
            
        }
    })
}
