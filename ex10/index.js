const vagas = []

//Funções de Validação

function validarData(dataLimite) {

    let regex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/
    let validandoData = regex.test(dataLimite)
    let dataValida = false

    if (validandoData !== true) {
        alert('[A data informada se encontra em um formato errado!]')
        dataValida = false
        return dataValida
    } else {
        dataValida = true
        return dataValida
    }
}

//Funções ligadas ao menu

function criarVaga() {

    let nome = prompt(`Digite o título da VAGA:`)
    let descricao = prompt(`Descrição da VAGA:`)

    let dataValida = 'false'
    let dataLimite = ''

    do {
        dataLimite = prompt(`Qual será a data limite para inscrição nessa VAGA? EX: dd/mm/aaaa`)
        dataValida = validarData(dataLimite)
    } while (dataValida !== true)

    if (dataValida) {
        let confirmacao = confirm(`Tem certeza que deseja adicionar essa VAGA?\n---------------\nTítulo da Vaga: ${nome}\nDescrição:\n${descricao}\nData Limite: ${dataLimite}`)

        if (confirmacao) {
            vagas.push({
                'nome': nome,
                'descricao': descricao,
                'dataLimite': dataLimite,
                'candidatos': []
            })
            alert('Vaga adicionada com sucesso!')
        } else {
            alert('Voltando ao MENU..')
        }
    }

}

function listarVagas() {
    let lista = vagas.reduce(function (acumulativo, elemento) {
        return acumulativo + `\nVaga(${vagas.indexOf(elemento)+1})\n------------\n${elemento.nome}\nNúmero de inscritos: ${elemento['candidatos'].length}\n------------\n`
    }, '')

    if (lista.length === 0) {
        alert('Não há vagas disponíveis no momento.')
    } else {
        alert(lista)
    }
}


function visualizarVaga() {
    let candidatos = ''
    let voltarMenu = false

    do {
        let indiceVaga = parseInt(prompt('Qual é o índice da vaga que você deseja vizualizar?'))
        indiceVaga--

        let vaga = vagas.filter(function (elemento, indice) {
            return indice == indiceVaga
        })

        if (vaga[indiceVaga].candidatos.length !== 0) {
            candidatos = vaga[indiceVaga].candidatos.reduce(function (acumulativo, elemento) {
                return acumulativo + `\n- ${elemento}`
            }, '')
        }

        if (vaga.length === 0) {
            alert('[VAGA INEXISTENTE]')

        } else {
            if(candidatos.length === 0) {
                alert(`Vaga(${indiceVaga+1})\n---------------\n${vaga[indiceVaga].nome}\nDescrição:\n${vaga[indiceVaga].descricao}\nData limite: ${vaga[indiceVaga].dataLimite}\nNúmero de candidatos: ${vaga[indiceVaga].candidatos.length}`)
                voltarMenu = true
            } else {
                alert(`Vaga(${indiceVaga+1})\n---------------\n${vaga[indiceVaga].nome}\nDescrição:\n${vaga[indiceVaga].descricao}\nData limite: ${vaga[indiceVaga].dataLimite}\nNúmero de candidatos: ${vaga[indiceVaga].candidatos.length}\nCandidatos: ${candidatos}`)
                voltarMenu = true
            }
        }

    } while (voltarMenu === false)

}

function inscreverCandidato() {
    let confirmacao = false
    let voltarMenu = false
    let nome = prompt('Nome do candidato:')
    do {
        let indiceVaga = parseInt(prompt('Qual é o índice da vaga que você deseja se candidatar?'))

        for (c = 0; c <= vagas.length - 1; c++) {

            if (vagas.indexOf(vagas[c]) === indiceVaga - 1) {
                confirmacao = confirm(`Você tem certeza que quer adicionar o candidato ${nome} na vaga:\n${vagas[c].nome}\nNúmero de inscritos: ${vagas[c].candidatos.length}`)

                if (confirmacao) {
                    vagas[c].candidatos.push(nome)
                    voltarMenu = true
                    alert('Inscrição realizada com sucesso!')
                } else {
                    alert('Voltando ao MENU..')
                    voltarMenu = true
                }

            } else if (vagas[indiceVaga] === undefined) {
                alert('[VAGA INEXISTENTE]')
            }
        }

    } while (voltarMenu === false)
}

function excluirVaga() {
    let confirmacao = false
    let voltarMenu = false
    do {
        let indiceVaga = parseInt(prompt('Informe o indice da vaga que será excluída:'))

        for (c = 0; c <= vagas.length - 1; c++) {

            if (vagas.indexOf(vagas[c]) === indiceVaga - 1) {
                confirmacao = confirm(`Você tem certeza que deseja excluir a vaga:\n(${c + 1})\n${vagas[c].nome}\nDescrição:\n${vagas[c].descricao}\nNúmero de inscritos: ${vagas[c].candidatos.length}`)

                if (confirmacao) {
                    vagas.splice(indiceVaga - 2, 1)
                    voltarMenu = true
                    alert('A vaga foi excluída com sucesso!')
                } else {
                    voltarMenu = true
                    alert('Voltando ao MENU..')
                }

            } else if (vagas[indiceVaga] === undefined) {
                alert('[VAGA INEXISTENTE]')
            }
        }

    } while (voltarMenu === false)
}

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
        case '3':
            visualizarVaga()
            break
        case '4':
            inscreverCandidato()
            break
        case '5':
            excluirVaga()
            break
        default:
            alert('[OPÇÃO INVÁLIDA]')
    }
}

menu()

