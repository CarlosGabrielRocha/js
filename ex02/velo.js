let nome1 = prompt("Nome do Primeiro veículo: ")
let velo1 = parseInt(prompt("Quantos Km/h? "))
let nome2 = prompt("Nome do Segundo veículo: ")
let velo2 = parseInt(prompt("Quantos Km/h? "))

if (velo1 > velo2) {
    alert(`O veículo ${nome1} é mais rápido.`)
} else if (velo2 > velo1) {
    alert(`O veículo ${nome2} é mais rápido.`)
} else {
    alert(`A velocidade de ambos é a mesma.`)
}
