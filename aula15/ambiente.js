let num = [5, 8, 2, 9, 3 ]
num.push(1)
num.sort()
/*console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)*/

/*var pos = 0
do {
    console.log(`${num[pos]}`)
    pos++
} while(pos <= num.length)*/

/*for(let pos = 0; pos < num.length; pos++) {
    console.log(`A pocisão ${pos} tem o valor ${num[pos]}`)
}*/

/*for (let pos in num) {
    console.log(`A pocisão ${pos} tem o valor ${num[pos]}`)
}*/

/*let pos = num.indexOf(7)
console.log(pos)*/

let pos = num.indexOf(65)
if(pos== -1) {
    console.log(`O valor não foi encontrado.`)
} else {
    console.log(`O valor 5 está na pocisão ${pos}`)
}
