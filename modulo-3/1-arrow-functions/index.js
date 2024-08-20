//Exemplo 1

const arrowSum = (a, b) => {
    return a + b
}

console.log(`Soma Arrow Functions: ${arrowSum(2, 4)}`)

//Exemplo 2

const subtract = (a, b) => a - b

console.log(`Subtração: ${subtract(5, 3)}`)

//Exemplo 3

const double = n => `O dobro de ${n} é igual a ${n * 2}`

//Exemplo 4

const number = 21

console.log(double(number))

//Exemplo 5

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P' )

console.log(startingWithP)