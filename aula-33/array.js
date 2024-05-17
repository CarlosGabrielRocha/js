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
