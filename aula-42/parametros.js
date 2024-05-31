function dobro(x) {
    alert(`O dobro de ${x} é ${x * 2}`)
}

//dobro(5)

function dizerOla(nome = "Meu nobre") {
    alert(`Olá, ${nome}!`)
}

//dizerOla("Gabriel")

//dizerOla()

function soma(a, b, c) {
    alert(`O resultado da soma é ${a + b + c}`)
}

//soma(6, 5, 10)

function criarUsuario(nome, email, senha, tipo = "Admin") {
    const usuario = {
        nome, //mesmo que nome: nome (Quando se tem uma chave de um parâmetro de um objeto com um valor 
        email, //com um mesmo nome, o javaScript permite abreviar.
        senha,
        tipo 
    }   
    
    console.log(usuario)
}

criarUsuário("Gabriel", "CarlosGabriel123@gmail", "1234")