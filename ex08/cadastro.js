let pick = ""
let cadas = [["Proprietário(a): Dayse", " Quartos: 2", " Banheiros: 1", " Garagem: N"]]
let mostrar = ""
do {
   pick = prompt(`Quantidade de imóveis cadastrados: ${cadas.length}\n[DIGITE O NÚMERO DE UM DAS OPÇÕES]
1 - Salvar imóvel\n2 - Mostras imóveis salvos\n3 - Sair `)

switch(pick){
    case "1":
        let dados = []
        dados.push(`Proprietário(a): ${prompt(`Nome do proprietário:`)} `) 
        dados.push(` Quartos: ${prompt(`Quantidade de quartos:`)} `) 
        dados.push(` Banheiros: ${prompt(`Quantidade de banheiros:`)} `)
        dados.push(` Garagem: ${prompt(`Possui garagem?[N/S]`)}`)

        cadas.push(dados)
    break
    case "2":
        for(let i = 0; i < cadas.length; i++) {
            mostrar += (`\nImóvel ${i+1}:\n${cadas[i]}`)
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