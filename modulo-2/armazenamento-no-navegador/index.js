document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value =  ''
})

document.getElementById('readySession').addEventListener('click', function () {
    const info = sessionStorage.getItem('info')
    alert(`A informação salva é: ${info}`)
})

document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
    const text = localStorage.getItem('text')
    alert(`O texto salvo no localStorage é: ${text}`)
})

document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    // cookie Name=value; expires=UTCStringDate; path=/
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024, 7, 21) + ';'
    const path = 'path=/;' // A / significa que ficará disponível em qualquer página
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    // cookie Name=value; expires=UTCStringDate; path=/
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024, 7, 21) + ';'
    const path = 'path=/;' // A / significa que ficará disponível em qualquer página
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})