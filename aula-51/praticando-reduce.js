// Reduce

const vendas = [
    { id: 1, nome: 'Camiseta', categoria: 'Roupas', preco: 29.99, quantidade: 3, data: '2023-01-01' },
    { id: 2, nome: 'Calça', categoria: 'Roupas', preco: 49.99, quantidade: 2, data: '2023-05-01' },
    { id: 3, nome: 'Tênis', categoria: 'Calçados', preco: 99.99, quantidade: 1, data: '2023-02-01' },
    { id: 4, nome: 'Sandália', categoria: 'Calçados', preco: 39.99, quantidade: 4, data: '2023-06-01' },
    { id: 5, nome: 'Boné', categoria: 'Acessórios', preco: 19.99, quantidade: 5, data: '2023-03-01' }
  ]

  const relatorio = vendas.reduce(function(acumulado, elemento) {
    
    if (acumulado[elemento.categoria]) {
        acumulado[elemento.categoria].totalFaturamento += elemento.preco * elemento.quantidade
        acumulado[elemento.categoria].totalItens += elemento.quantidade

        let data = new Date(elemento.data)
        let primeiraData = new Date(acumulado[elemento.categoria].primeiraVenda)
        let ultimaData = new Date(acumulado[elemento.categoria].ultimaVenda)

        if (data > ultimaData) {
            acumulado[elemento.categoria].ultimaVenda = elemento.data

        } else if (data < primeiraData) {
            acumulado[elemento.categoria].primeiraVenda = elemento.data

        }

    } else {
        acumulado[elemento.categoria] = {    
        totalFaturamento: elemento.preco * elemento.quantidade,
        totalItens:  elemento.quantidade,
        primeiraVenda: elemento.data,
        ultimaVenda: elemento.data
     }

    }

    return acumulado
  }, {})

  console.log(relatorio)

