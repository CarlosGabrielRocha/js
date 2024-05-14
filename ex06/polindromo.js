const palavra = prompt('Por favor, escreva uma Palavra: ')
let t = ""
for(let i=palavra.length-1; i >= 0; i--) {
 t += palavra[i]
}

if(palavra==t) {
    alert(`Essa palavra é um Políndromo:\n${palavra}\n${t}`)
} else {
    alert(`Essa palavra não é um Polídromo:\n${palavra}\n${t}`) 
}