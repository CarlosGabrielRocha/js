function Tabuada() {
    let num = window.document.getElementById('inum')
    let tab = window.document.getElementById('itab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //value vai pro php
            tab.appendChild(item)
            c++
        }
    }
    
}