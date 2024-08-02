const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev) {
    ev.preventDefault() //Previne o comportamente padrão de um evento.

    const name = document.querySelector('input[name = "name"]').value
    const address = document.querySelector('input[name = "address"]').value
    const breadType = document.querySelector('select[name = "breadType"]').value //Value da opt escolhida
    const main = document.querySelector('input[name = "main"]').value // Devolve o radio marcado
    const observations = document.querySelector('textarea[name = "observations"]').value 

    let salad = ''
    //checkbox que estão marcadas
    document.querySelectorAll('input[name = "salad"]:checked').forEach(function(item) {
        salad += `- ${item.value}\n `
    })
    
    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations
    })

    alert(`Pedido realizado!\nNome do Cliente: ${name}\nEndereço de Entrega: ${address}\nTipo de pão: ${breadType}\nRecheio: ${main}\n${salad}\nObservações: ${observations} `)
})

