const produtos = [
    { id: 1, nome: 'Camiseta', categoria: 'Roupas', preco: 29.99, disponivel: true },
    { id: 2, nome: 'Calça', categoria: 'Roupas', preco: 59.99, disponivel: false },
    { id: 3, nome: 'Tênis', categoria: 'Calçados', preco: 99.99, disponivel: true },
    { id: 4, nome: 'Sandália', categoria: 'Calçados', preco: 39.99, disponivel: true },
    { id: 5, nome: 'Boné', categoria: 'Acessórios', preco: 19.99, disponivel: true },
    { id: 6, nome: 'Vestido', categoria: 'Roupas', preco: 49.99, disponivel: true },
    { id: 7, nome: 'Óculos', categoria: 'Acessórios', preco: 79.99, disponivel: false },
    { id: 8, nome: 'Chinelo', categoria: 'Calçados', preco: 19.99, disponivel: true }
]

function filtrarPorPreco(produtos, disponibilidade) {
    const produtoDisponivel = produtos.filter(function(elemento) {
        return elemento.disponivel === disponibilidade
    })
    
    const faixasDePreco = {
        '0-20': [],
        '21-50': [],
        '51-100': [],
        '101+': []
    }

    produtoDisponivel.forEach(function(elemento) {

        if (elemento.preco <= 20) {
            faixasDePreco['0-20'].push(elemento)
        } else if(elemento.preco > 20 && elemento.preco <= 50) {
            faixasDePreco['21-50'].push(elemento)
        } else if(elemento.preco > 50 && elemento.preco <= 100) {
            faixasDePreco['51-100'].push(elemento)
        } else {
            faixasDePreco['101+'].push(elemento)
        }

    })
    
    return(faixasDePreco)
}

console.log(filtrarPorPreco(produtos, true))
