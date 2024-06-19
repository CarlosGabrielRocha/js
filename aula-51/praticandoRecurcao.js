
function fatorial(n) {
    if (n === 0) {
        return 1
    } else if (n === 1) {
        return 1
    } else {
        console.log(`${n} * !${n - 1}`)
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))

function somaDigitos(n) {
    
}