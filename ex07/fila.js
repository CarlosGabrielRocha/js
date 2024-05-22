let wanting = ["Matheus", "Gabriel", "Letícia", "Lucas"]
let opt
let list = ""

do {
    for(let i = 0;i < wanting.length; i++) {
        list += `\n${i+1} - ${wanting[i]}`
    }
    opt = prompt(`LISTA DE ESPERA${list}\nOPÇÕES\n[1]Novo Paciente\n[2]Consultar Paciente\n[3]Sair`)
    list = ""
    switch(opt) {
        case '1':
            wanting.push(prompt("NOME DO PACIENTE:"))
        break
        case '2':
            let consul = wanting.shift()
            if (consul) {
                alert(`Paciente ${consul} foi consultado.`)
            } else {
                alert(`Não há pacientes na fila.`)
            }
            
        break
        case '3':
            alert("SAINDO..")
        break
        default:
            alert("[OPÇÃO INVÁLIDA]")
    }
} while(opt != 3)