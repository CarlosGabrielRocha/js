const pessoas = [
    { id: 1, nome: 'João', idade: 25, cidade: 'São Paulo' },
    { id: 2, nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
    { id: 3, nome: 'Ana', idade: 22, cidade: 'São Paulo' },
    { id: 4, nome: 'Carlos', idade: 28, cidade: 'Belo Horizonte' },
    { id: 5, nome: 'Beatriz', idade: 32, cidade: 'São Paulo' },
    { id: 6, nome: 'Pedro', idade: 19, cidade: 'Rio de Janeiro' },
    { id: 7, nome: 'Fernanda', idade: 35, cidade: 'Belo Horizonte' },
    { id: 8, nome: 'Lucas', idade: 27, cidade: 'São Paulo' }
]

function filtrarPessoas(pessoas, idadeMin, idadeMax, cidade) {
        return pessoas.filter(function(elemento) {
            return elemento.idade >= idadeMin &&
                   elemento.idade <= idadeMax &&
                   elemento.cidade === cidade             
    })
}

console.log(filtrarPessoas(pessoas, 19, 25, 'São Paulo'))