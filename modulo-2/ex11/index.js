const players = []

function currentlyPlayers() {
    const list = document.getElementById('players')
    const ul = document.createElement('ul')

    // terminar

    players.forEach(function(elemento) {

        ul.appendChild(document.createElement(li))
    })
}

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
        players.push({
            jogador: pName,
            posicao: position,
            camisa: shirt
        })
        alert('Jogador adicionado com sucesso!')
   } 
}

currentlyPlayers()