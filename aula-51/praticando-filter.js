const transactions = [
    { id: 1, type: 'income', amount: 500, date: '2024-06-01' },
    { id: 2, type: 'expense', amount: 150, date: '2024-06-02' },
    { id: 3, type: 'expense', amount: 90, date: '2024-06-03' },
    { id: 4, type: 'expense', amount: 200, date: '2024-06-04' },
    { id: 5, type: 'income', amount: 800, date: '2024-06-05' }
  ]

const startDate = new Date('2024-06-01')
const endDate = new Date('2024-06-03')

function filterTransactions(transactions, startDate, endDate) {
    const filtrado = transactions.filter(function(elemento) {
        let elementDate = new Date(elemento.date)
        return elemento.type === 'expense' &&
               elemento.amount > 100 &&
               elementDate.getTime() >= startDate.getTime() &&
               elementDate.getTime() <= endDate.getTime()
    })

    return filtrado
}

console.log(filterTransactions(transactions, startDate, endDate))
