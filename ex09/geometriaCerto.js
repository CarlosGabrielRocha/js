
function areaTriangulo() {
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
    return alert(`A área do triângulo que você digitou é: ${base * altura /2}`)
}

function areaRetangulo() {
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
                return alert('As medidas que você digitou, não forma um retângulo..')
            } else {
                return alert(`A área do retângulo que você digitou é: ${ base * altura}`)
            }
}

function areaQuadrado() {
    let lado = parseFloat(prompt('Digite o valor dos lados do quadrado:'))
            while(isNaN(lado)) {
                alert('Valor inválido')
                lado = parseFloat(prompt('Digite o valor dos lados do quadrado:'))
            }
           return alert(`A área do Quadrado que você digitou é: ${lado * lado}`)
}

function areaTrapezio() {
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
           return alert(`A área do trapézio que você digitou é: ${(baseMa + baseMe) * altura / 2}`)
}

function areaCirculo() {
    let raio = parseFloat(prompt('Digite o valor do raio do círculo:'))
        while(isNaN(raio)) {
            alert('Valor inválido')
            raio = parseFloat(prompt('Digite o valor do raio do círculo:'))
        }
       return alert(`A área do círculo que você digitou é: ${3.14 * (raio * raio)}`)
}

function options() {
    res = prompt(`[DIGITE O NÚMERO DE UMA DAS OPÇÕES]\n1. Área do Triângulo\n2. Área do Retângulo\n3. Área do Quadrado\n4. Área do Trapézio\n5. Área do Círculo\n6. Sair`)
    return res
}

function executar() {
    do {
        res = options()
        switch (res) {
            case '1':
                areaTriangulo()
            break
            case '2':
                areaRetangulo()
            break
            case '3':
                areaQuadrado()
            break
            case '4':
                areaTrapezio()
            break
            case '5':
                areaCirculo()
            break
            case '6':
                alert('SAINDO..')
            break
            default:
                alert('OPÇÃO INVÁLIDA')
        }
    } while (res != "6")
}

executar()