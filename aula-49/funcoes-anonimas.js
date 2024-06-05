function somar(a, b) {
    return a + b
}

let operacao = somar

//console.log(operacao(5, 3))

operacao = function (a, b) {
    return a - b
}

//console.log(operacao(10, 3))

//CristoRei()
//SalveMaria()

function CristoRei() {
    console.log('Cristo é rei!')
}

const SalveMaria = function() {
    console.log('Salve Maria!')
}

const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = operacao
calculadora.multiplicar = function (a, b) {
    return a * b
}

console.log(calculadora.multiplicar(5, 2))
