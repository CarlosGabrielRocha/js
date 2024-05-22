let cartas = ["Rei", "Valete", "Dama", "5Espada", "2Ouro"]
let opt
let baralho = ""
do {
    for(let i = 0;i < cartas.length; i++) {
        baralho += `\n- ${cartas[i]}`
    }
    opt = prompt(`BARALHO(${cartas.length})${baralho}\nOPÇÕES\n[1]Adicionar Carta\n[2]Puxar Carta\n[3]Sair`)
    baralho = ""
    switch(opt) {
        case "1":
            cartas.unshift(prompt("Nome da carta:"))
        break
        case "2":
            nome = cartas.shift()
            if(nome != undefined) {
                alert(`A carta ${nome} foi puxada.`)
            } else {
                alert(`[OPÇÃO INVÁLIDA]`)
            }
            
        break
        case "3":
            alert("SAINDO..")
        break
        default:
            alert("[OPÇÃO INVÁLIDA]")
    }
}while(opt != 3)