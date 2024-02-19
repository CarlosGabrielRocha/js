
function contar() {
    let ini = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let pas = document.getElementById('ipasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p <= 0) {
            window.alert('Passo inválido, considerando PASSO 1')
            p = 1
        }

        res.innerHTML = 'contando.. <br> '
        // Contagem crescente
        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449}${c} `
            }
        } else {
        // Contagem regressiva
            for(c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
        res.innerHTML += `\u{1F3F4}`
        
    }
        
}


