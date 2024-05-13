const nome = prompt('Qual é o seu nome?')
let res = 1
let city = ''
let quant = 0
while (res == 1) {
    res = prompt(`Já visitou alguma cidade?\n1[SIM] 2[NÃO]`)
    if (res == 1) {
        quant == 0?city += prompt(`Qual é o nome da cidade?`):city += ` ` + prompt(`Qual é o nome da cidade?`)
        quant++
    } else if (res == 2) {
        alert('saindo..')
        city += '.'
    } else {
        alert('[OPÇÃO INVÁLIDA], saindo..')
    }
}

if (res == 2) {
   alert(`Então ${nome}, você visitou ${quant} cidades, sendo elas ${city}`)
}