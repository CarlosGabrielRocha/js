const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
    input.value = input.value === ''? 'Olá, mundo!': '' 

    console.log(input.value) //Comportamento dinâmico, em tempo real, irá pegar o valor atual
    console.log(input.getAttribute('value')) // Pega o valor predefinido desse input, o valor inicial
})

document.getElementById('type').addEventListener('click', function () {
   // input.type = input.type !== 'radio'? 'radio' : 'text'
   input.setAttribute('type', 'radio') //Define o valor de um atributo
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse 
    console.log(`O valor do atributo data-something-else é: ${data}`)
    input.dataset.somethingElse = 'Algum outro valor'
    console.log(`O valor do atributo data-something-else agora é: ${input.dataset.somethingElse}`)
})
