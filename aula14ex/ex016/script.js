
function contar() {
    let ini = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let pas = document.getElementById('ipasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'contando..'
        let i = ini.value
        let f = fim.value
        let p = pas.value

        for(let c = i;c <= fim; c += pas) {
            res.innerHTML += `${c}`
        }
    
    }

 
    /*
    while (ini <= fim) {
        cont.innerHTML += `${num}`
        ini = ini += pas
    }
    */
}


