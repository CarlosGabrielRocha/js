let nome = new String("Carlossssss Gabriel Rochaaaaaaaaa 2003")
let email = "carlosgabriel092003@gmail.com"
console.log(nome)

console.log(nome.search("gabriel"))

console.log(nome.match(/O/ig))

console.log(nome.replace("Carlos","Gabriel"))

console.log(nome.match(/[a-i|0-5]/ig))

console.log(nome.match(/\d/ig)) // Números
console.log(nome.match(/\s/ig)) // Espaços
console.log(nome.match(/\bC/ig)) // Caracteres

// Quantificadores

console.log(nome.match(/s+/ig))

