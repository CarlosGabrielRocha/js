const playersNow = []

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

    button.addEventListener('click', function () {
        escalar(inputPosition.value, inputName.value, inputShirt.value)
        menu.removeChild(ul)
    })

}

// Terminar

function escalar(position, pName, shirt) {
    const add = confirm(`Tem certeza que deseja escalar o jogador com as informações:\nPosição do jogador: ${position}\nNome do jogador: ${pName}\nCamisa do jogador: ${shirt}`)

    if (add === true) {
        const list = document.getElementById('players')
        const ul = document.createElement('ul')

        ul.className = 'escalados'

        playersNow.push({
            nome: pName,
            posicao: position,
            camisa: shirt
        })

        const restart = list.getElementsByTagName('ul')

        for (c = 0; c <= restart.length - 1; c++) {
            restart[c].remove()
        }

        playersNow.forEach(function (elemento) {

            const liPosition = document.createElement('li')
            const liName = document.createElement('li')
            const liShirt = document.createElement('li')

            liName.innerText = `Nome do jogador: ${elemento.nome}`
            liPosition.innerText = `Posição do jogador: ${elemento.posicao}`
            liShirt.innerText = `Camisa do jogador: ${elemento.camisa}`
            ul.append(liName, liPosition, liShirt, document.createElement('br'))
            list.appendChild(ul)
        })

        alert('Jogador adicionado com sucesso!')
    }

}

function removePlayer() {

    const playerToRemove = prompt(`Informe o número da camisa do jogador que será removido: `)

    const confirmacao = confirm(`Tem certeza que deseja remover esse elemento?`)

    if(confirmacao) {
        playersNow = playersNow.filter(function(elemento) {
            return elemento.camisa !== playerToRemove
        })
    }

}
