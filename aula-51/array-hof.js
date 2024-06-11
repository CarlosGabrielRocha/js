/*const lista = ["Maçã", "Banana", "Laranja", "Limão"]
lista.forEach(function(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
})*/

/*const numeros = [1, 2, 3, 4, 5]
let soma = 0;

numeros.forEach(function(numero) { //numero = elemento
    soma += numero
});

console.log(soma) // 15*/

const letras = ["a", "b", "a", "c", "a", "b"]
const contagem = {}

letras.forEach(function(letra) {
    if (contagem[letra]) { //Se letra(elemento) existir dentro do objeto contagem
        contagem[letra]++
    } else { 
        contagem[letra] = 1
    }
})

console.log(contagem) // { a: 3, b: 2, c: 1 }