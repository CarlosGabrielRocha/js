const vagas = []


function criarVaga() {
    // Variáveis para teste de data
    let results = false
    let regex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/
    let dataLimite = ''
    let tentativas = 0

    let nome = prompt(`Digite o nome da VAGA:`)
    let descricao = prompt(`Descrição da VAGA:`)

    do {
        dataLimite = prompt(`Qual será a data limite para inscrição nessa VAGA? EX: dd/mm/aaaa`)
        results = regex.test(dataLimite)
        if (results !== true) {
            alert('Data inválida!')
            tentativas++
            alert(tentativas)
        }
        if (tentativas > 3) {
            alert('Voltando ao MENU..')
        }
    } while (results !== true || tentativas <= 3)

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

function menu() {
    let opt = prompt(`1. Vagas disponíveis\n2. Criar nova vaga\n3. Vizualizar vaga\n4. Inscrever candidato em vaga\n5. Excluir vaga\n6. Sair `)
    if(opt === '6') {
        return alert('SAINDO..')
    } else {
        opcoes(opt)
        menu()
    }
}

function opcoes(opt) {
    switch (opt) {
        case '2':
        criarVaga()
        break
        default:
            alert('[OPÇÃO INVÁLIDA]')
    }
}

menu()

