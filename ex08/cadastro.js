let pick = ""
let cadas = [{proprietario: "Dayse", quartos: "2", banheiro: "1", garagem: "N"}]


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

        cadas.push(dados)
    break
    case "2":
        for(let i = 0; i < cadas.length; i++) {
            alert(`\nImóvel ${i+1}:\n${cadas[i].proprietario}, ${cadas[i].quartos}, ${cadas[1].banheiro}, 
${cadas[1].garagem}`)
        }
        alert(`IMOVÉIS SALVOS:\n${mostrar}`)
        mostrar = ""
    break
    case "3":
        alert(`ENCERRANDO PROGRAMA...`)
    break
    default:
        alert(`OPÇÃO INVÁLIDA`)
}

}while(pick != "3")