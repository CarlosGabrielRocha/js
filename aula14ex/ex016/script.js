
var inicio = window.document.querySelector('input#iinicio')
var final = window.document.querySelector('input#ifim')
var passo = window.document.querySelector('input#ipasso')
var cont = window.document.querySelector('div#contagem')
function contar() {
    /*for (var num = ini;num <= fim;num = num + pas.value) {
       cont.innerHTML = `${num.value}`
    }
    */
    var num = inicio.value
    var pas  = passo.value
    var fim =  final.value  
    while (num <= fim) {
        cont.innerHTML = `${num}`
        num = num + pas
    }
}