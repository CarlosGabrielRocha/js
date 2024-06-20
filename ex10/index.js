const vagas = []

function criarVaga() {
    let nome = prompt(`Digite o nome da VAGA:`)
    let descricao = prompt(`Decreva informações da VAGA:`)
    let dataLimite = prompt(`Qual será a data limite para inscrição na VAGA? EX: dd/mm/aaaa`)
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

