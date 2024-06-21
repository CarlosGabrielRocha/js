let nome = "Gabriel"
let nome2 = ("Gabriel Rocha") 
let sobreNome = "Rocha"

console.log(nome)

console.log(nome.charAt(0))

console.log(nome.charCodeAt(1))

console.log(nome.concat(sobreNome))

console.log(nome.indexOf("br"))

console.log(nome.lastIndexOf("a"))

console.log(nome.localeCompare(nome2))

console.log(nome.replace("G", "P"))

console.log(nome.slice(1, 5))

let arr_nome = nome.split(" ")
console.log(arr_nome)

console.log(nome.substring(0, 6))

console.log(nome.toLocaleLowerCase())
console.log(nome.toLocaleUpperCase())

console.log(nome)
console.log(nome.valueOf())

let num = 10
console.log(typeof(num.toString()))

console.log(nome.startsWith("Gabriel"))
console.log(nome.endsWith("a"))

console.log(nome.includes('Carlos'))

console.log(nome.repeat(4))

console.log(nome.charCodeAt(1))

console.log(String.fromCodePoint(66, 114, 117, 110, 111))