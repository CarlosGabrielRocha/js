function CalcTabuada() {
    let num = window.document.getElementById('inum')
    let tip = window.document.getElementById('itipo')
    let res = window.document.getElementById('ires')

    if (num == 0 && tip == 0) {
        alert('Preencha os campos.')
    } else if(num == 0){
        alert('Por favor, Digite um número.')
    } else if(tip == 0 ) {
        alert('Por favor, selecione o tipo.')
    } else {
        n = Number(num.value)
        t = String(tip.value)
        c = 1
        res.innerHTML = ''
        if (t == 'multiplicação') {
            while (c <= 10) {
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                res.appendChild(item)
                c++
            }
        } else if (t == 'soma') {
            while (c <= 10) {
                let item = document.createElement('option')
                item.text = `${n} + ${c} = ${n+c}`
                res.appendChild(item)
                c++
            }
        } else if (t == 'subtração') {
            while (c <= 10) {
                let item = document.createElement('option')
                item.text = `${n} - ${c} = ${n-c}`
                res.appendChild(item)
                c++
            }
        }
    }
}