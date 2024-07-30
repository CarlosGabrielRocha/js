let playersNow = []

function addPlayer() {

    const menu = document.getElementById('menu')

    const restart = menu.getElementsByTagName('ul')

    for (let c = 0; c <= restart.length - 1; c++) {
        restart[c].remove()
    }

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
    inputShirt.name = 'camisaJogador'
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
    
    let add = false
    let exist = false

    playersNow.forEach(function(elemento) {
        if (elemento.camisa == shirt || elemento.posicao == position) {
            alert('Não é permitido jogadores iguais em uma partida.')
            exist = true
        } 
    })

    if(exist != true) {
        add = confirm(`Tem certeza que deseja escalar o jogador com as informações:\nPosição do jogador: ${position}\nNome do jogador: ${pName}\nCamisa do jogador: ${shirt}`)
    }

    if (add === true) {
        playersNow.push({
            nome: pName,
            posicao: position,
            camisa: shirt
        })

        alert('Jogador adicionado com sucesso!')
        list()
    }

}

// Listar jogadores na página

function list() {

    const list = document.getElementById('players')
    const ul = document.createElement('ul')

    const restart = list.getElementsByTagName('ul')

    for (let c = 0; c <= restart.length - 1; c++) {
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

}

//Remover jogador

function removePlayer() {
    let exist = 0
    const playerToRemove = prompt(`Informe o número da camisa do jogador que será removido: `)

    playersNow = playersNow.filter(function (elemento) {
        if (elemento.camisa === playerToRemove) {
            exist++
            const remove = confirm(`Tem certeza que deseja remover o jogador com as informações:\nPosição do jogador: ${elemento.posicao}\nNome do jogador: ${elemento.nome}\nCamisa do jogador: ${elemento.camisa}`)

            if (remove === true) {
                alert('Jogador removido com sucesso!')
                return false
            } else {
                return true
            }

        } else {
            return true
        }
    })

    if(exist == 0) {
        alert('O jogador não existe.')
    }

    list()

}
