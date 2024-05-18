const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adicionando Elementos
/* push (Adiciona o elemento no final) 
  Retorna o tamanho atualizado do Array que pode ser passado
  para uma variável, caso seja necessário.
*/

let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

/* unshift (Adiciona o elemento no inicio) 
  Também retorna o tamanho atualizado do Array.
*/

tamanho = arr.unshift("Test")
console.log(arr)
console.log(tamanho)

// Remover elementos 
/* pop (Remove o último elemento) 
  Retorna o elemento removido que pode ser passado
  para uma variável, caso seja necessário.
*/

let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

/* shift (Remove o primeiro elemento) 
  Também retorna o elemento removido.
*/

let primeiroElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento
/* includes (Verifica se um valor existe dentro do array) 
  Retorna um valor do tipo boolean (true/false), que pode ser passado
  para uma variável, caso seja necessário.
*/

const inclui = arr.includes("Gandalf")
console.log(inclui)

/* indexOf (Verifica o indice de um valor.) 
*/

const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortar e concatenar
/* slice 
*/

const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat ( É possível concatenar vários arrays junto com outros valores e armazenar em uma var)

const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//Substituição de Elementos
/* splice
  Retorna o elemento substituido que pode ser armazenado em uma variável.
*/

const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento", 1, 3, false, true)
console.log(sociedade)
console.log(elementosRemovidos)

//Iterar sobre os elementos

for (let i = 0; i < sociedade.length; i++) {
  const elemento = sociedade[i]
  console.log(elemento + " se encontra na posição " + i)
}