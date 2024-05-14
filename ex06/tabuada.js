alert('Olá, seja bem vindo.')
let num = prompt('Por favor, digite um Número:')
let tab = ``
for(let i = 1; i <= 20; i++) {
    tab += `\n${num} x ${i} = ${num*i}`
}

alert(`Resultado:${tab}`)