let pick = ""
let cadas = []


do {
   pick = prompt(`Quantidade de imóveis cadastrados: ${cadas.length}\n[DIGITE O NÚMERO DE UM DAS OPÇÕES]
1 - Salvar imóvel\n2 - Mostras imóveis salvos\n3 - Sair `)

switch(pick){
    case "1":
        const dados = {}
        dados.proprietario =`Proprietário(a): ${prompt(`Nome do proprietário:`)} `
        dados.quartos = ` Quartos: ${prompt(`Quantidade de quartos:`)} ` 
        dados.banheiro = ` Banheiros: ${prompt(`Quantidade de banheiros:`)} `
        dados.garagem = ` Garagem: ${prompt(`Possui garagem?[N/S]`)}`
        confirmacao = confirm(`Tem certeza que deseja salvar esse imóvel? ${dados.proprietario}, ${dados.quartos}, ${dados.banheiro}, ${dados.garagem}`)
        if(confirmacao) {
            cadas.push(dados)
            alert('O imóvel foi salvo com sucesso!')
        }else {
            alert('Voltando ao Menu.')
        }
        
    break
    case "2":
        for(let i = 0; i < cadas.length; i++) {
            alert(`\nImóvel ${i+1}:\n${cadas[i].proprietario}, ${cadas[i].quartos}, ${cadas[i].banheiro}, ${cadas[i].garagem}`)
        }
        
    break
    case "3":
        alert(`ENCERRANDO PROGRAMA...`)
    break
    default:
        alert(`OPÇÃO INVÁLIDA`)
}

}while(pick != "3")