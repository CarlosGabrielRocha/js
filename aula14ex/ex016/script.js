
var cont = window.document.querySelector('div#contagem')
function contar() {
    var num = window.document.querySelector('input#iinicio').value
    var pas = window.document.querySelector('input#ipasso').value
    var fim = window.document.querySelector('input#ifim').value
    while (num <= fim) {
        cont.innerHTML += ` ${num}`
        num = num += pas
    }
}


