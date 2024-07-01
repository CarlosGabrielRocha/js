const vagas = []

//Funções de Validação

function validarData(dataLimite) {
    let dataAtual = new Date()
    dataModificada = dataLimite.replace(/\//g, '-')
    dataTeste = new Date(dataModificada)

    let regex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/
    let validandoData = regex.test(dataLimite)
    let dataValida

    if (validandoData !== true) {
        alert('[A data informada se encontra em um formato errado!]')
        dataValida = false
        return dataValida
    } else if (dataTeste.getTime() < dataAtual.getTime()) {
        alert('[A data informada é anterior à data atual.]')
        dataValida = false
        return dataValida
    } else {
        dataValida = true
        return dataValida
    }

}

//Funções ligadas ao menu

function criarVaga() {

    let nome = prompt(`Digite o nome da VAGA:`)
    let descricao = prompt(`Descrição da VAGA:`)

    let dataValida = 'false'
    let dataLimite = ''

    do {
        dataLimite = prompt(`Qual será a data limite para inscrição nessa VAGA? EX: dd/mm/aaaa`)
        dataValida = validarData(dataLimite)
    } while (dataValida !== true)

    if (dataValida) {
        let confirmacao = confirm(`Tem certeza que deseja adicionar essa VAGA?\n---------------\nNome da Vaga: ${nome}\nDescrição:\n${descricao}\nData Limite: ${dataLimite}`)

        if (confirmacao) {
            vagas.push({
                'nome': nome,
                'descricao': descricao,
                'dataLimite': dataLimite
            })
            alert('Vaga adicionada com sucesso!')
        } else {
            alert('Voltando ao MENU..')
        }
    }

}

function listarVagas() {
    let lista = vagas.reduce(function (acumulativo, elemento) {
        return acumulativo += `\nVaga(${vagas.indexOf(elemento)})\n------------\n${elemento.nome}\nNúmero de inscritos:`
    }, '')

    alert(lista)
}

// TERMINAR

function inscreverCandidato() {
    let nome = prompt('Nome do candidato:')
    let indiceVaga = parseInt(prompt('Qual é o índice da vaga que você deseja se candidatar?'))
    let vaga = ''

    for(c = 0;c <= vagas.length; c++) {
        if (vagas.indexOf(vagas[c]) === indiceVaga) {
            return `Vaga(${vagas.indexOf(vagaAtual)})\n------------\n${vagaAtual.nome}\nNúmero de inscritos:`
        }
    }

    if (vagas[indiceVaga].candidatos) {
        confirm(`Tem certeza que deseja se candidatar a essa vaga?`)
        vagas[indiceVaga]['candidatos'].push(nome)

    } else if (vagas[indiceVaga] && vagas[indiceVaga].candidatos === undefined) {
        vagas[indiceVaga].candidatos = [nome]

    } else {
        alert('[Essa vaga não existe!]')
    }

}

//Menu

function menu() {
    let opt = prompt(`1. Vagas disponíveis\n2. Criar nova vaga\n3. Vizualizar vaga\n4. Inscrever candidato em vaga\n5. Excluir vaga\n6. Sair `)
    if (opt === '6') {
        return alert('SAINDO..')
    } else {
        opcoes(opt)
        menu()
    }
}

function opcoes(opt) {
    switch (opt) {
        case '1':
            listarVagas()
            break
        case '2':
            criarVaga()
            break
        case '4':
            inscreverCandidato()
            break
        default:
            alert('[OPÇÃO INVÁLIDA]')
    }
}

menu()

