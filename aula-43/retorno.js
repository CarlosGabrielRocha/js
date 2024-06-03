
/*No javaScript e em outras linguagens, é possível retornar um valor de uma função e joga-lo dentro
de uma variável*/

function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(7, 5)
//console.log(resultado)


/*Também é possível usar esse valor diretamente, sem precisar jogar dentro de uma variável.*/

function criarProduto(nome, preco) {
    const produto = {
        nome, // nome:nome
        preco, //preco:preco
        estoque: 1
    }
    return produto
}

//console.log(criarProduto("Notebook Intel Core i3 8GB", 2500))

/*Uma função pode retornar qualquer expressão e não necessariamente uma variável.*/ 
/*O legal é que uma função pode retornar outra função */

function areaRetangular(base, altura) {
    return base * altura
}

function areaQuadrada(lado){
    return areaRetangular(lado, lado)
}

//console.log(areaRetangular(3, 5))
//console.log(areaQuadrada(9))

/*Uma função só pode retornar UMA ÚNICA VEZ, depois do RETURN a função acaba imediatamente.*/

function ola() {
    let texto = '...'
    texto = "Salve, Maria!"
    console.log(texto)
    return texto
}

//console.log(ola())

/*Quando em uma função há várias ramificações (IF, SWIFT), é possível ter mais de um return,
mas só um será executado de fato. */

function maiorIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maiorIdade(21))
console.log(maiorIdade(12))