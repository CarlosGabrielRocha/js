
let res = ''
let base = 0
let altura = 0

//funções

function areaTriangulo(base=0, altura=0) {
    return base * altura /2
}

function areaRetangulo(base=0, altura=0) {
    return base * altura
}

function areaQuadrado(lado=0) {
    return areaRetangulo(lado, lado)
}

function areaTrapezio(baseMa=0, baseMe=0, altura=0) {
    return (baseMa + baseMe) * altura / 2
}

function areaCirculo(raio=0) {
    return 3.14 * (raio * raio)
}

//Menu

alert('OLÁ! VAMOS TE AJUDAR COM CÁLCULOS GEOMÉTRICOS!')

do {
    res = prompt(`[DIGITE O NÚMERO DE UMA DAS OPÇÕES]\n1. Área do Triângulo\n2. Área do Retângulo\n3. Área do Quadrado\n4. Área do Trapézio\n5. Área do Círculo\n6. Sair`)
    switch(res) {
        case '1':
            base = parseFloat(prompt('Digite a base do triângulo:'))
            while(isNaN(base)) {
                alert('Valor inválido')
                base = parseFloat(prompt('Digite a base do triângulo:'))
            }
            altura = parseFloat(prompt('Agora digite a altura'))
            while(isNaN(altura)) {
                alert('Valor inválido')
                altura = parseFloat(prompt('Digite a altura do triângulo:'))
            }
            alert(`A área do triângulo que você digitou é: ${areaTriangulo(base, altura)}`)
        break

        case '2':
            base = parseFloat(prompt('Digite a base do retângulo:'))
            while(isNaN(base)) {
                alert('Valor inválido')
                base = parseFloat(prompt('Digite a base do retângulo:'))
            }
            altura = parseFloat(prompt('Agora digite a altura'))
            while(isNaN(altura)) {
                alert('Valor inválido')
                altura = parseFloat(prompt('Digite a altura do retângulo:'))
            }
            if (base < altura) {
                alert('As medidas que você digitou, não forma um retângulo..')
            } else {
                alert(`A área do retângulo que você digitou é: ${areaRetangulo(base, altura)}`)
            }
            
        break

        case '3':
            let lado = parseFloat(prompt('Digite o valor dos lados do quadrado:'))
            while(isNaN(lado)) {
                alert('Valor inválido')
                lado = parseFloat(prompt('Digite o valor dos lados do quadrado:'))
            }
            alert(`A área do Quadrado que você digitou é: ${areaQuadrado(lado)}`)
        break

        case '4':
            let baseMa = parseFloat(prompt('Digite o valor da base Maior:'))
            while(isNaN(baseMa)) {
                alert('Valor inválido')
                baseMa = parseFloat(prompt('Digite o valor da base Maior:'))
            }
            let baseMe = parseFloat(prompt('Agora, digite o valor da base Menor:'))
            while(isNaN(baseMe) || baseMe >= baseMa) {
                alert('Valor inválido')
                baseMe = parseFloat(prompt('Agora, digite o valor da base Menor:'))
            }
            altura = parseFloat(prompt('Digite a altura'))
            while(isNaN(altura)) {
                alert('Valor inválido')
                altura = parseFloat(prompt('Digite a altura'))
            }
            alert(`A área do trapézio que você digitou é: ${areaTrapezio(baseMa, baseMe, altura)}`)
        break

        case '5':
            let raio = parseFloat(prompt('Digite o valor do raio do círculo:'))
            while(isNaN(raio)) {
                alert('Valor inválido')
                raio = parseFloat(prompt('Digite o valor do raio do círculo:'))
            }
            alert(`A área do círculo que você digitou é: ${areaCirculo(raio)}`)
        break
        
        case '6':
            alert('SAINDO..')
        break
        
        default:
            alert('OPÇÃO INVÁLIDA')
        break
    }
} while(res !== '6')