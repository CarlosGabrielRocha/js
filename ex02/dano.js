alert("BORA X1 MANO!")

let pnome1 = prompt("Qual é o nome do seu Personagem? ")
let atack = parseFloat(prompt("E o Poder de Ataque? "))

alert("ÓTIMO, AGORA O SEU OPONENTE. ")

let pnome2 = prompt("Qual é o nome do seu Oponente? ")
let vida = parseFloat(prompt("Pontos de Vida: "))
let def = parseFloat(prompt("Poder de Defesa: "))
let escudo = confirm("O seu oponente possui Escudo? ")
let dano 

if (atack > def && escudo == false) {
    dano = atack - def
} else if (atack > def && escudo == true) {
    dano = (atack - def)/2
} else if (atack <= def) {
    dano = 0
}

alert(`Resultado:
       Vida(${pnome2}): ${vida-dano}
       Dano causado pelo ${pnome1} em ${pnome2}: ${dano}

       Status(${pnome1}):
       Ataque: ${atack}
       Status(${pnome2}):  
       Vida: ${vida}
       Defesa: ${def}  
       Escudo: ${escudo==true?"SIM":"NÃO"}  
       Dano Sofrido: ${dano} `)