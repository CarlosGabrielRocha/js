const arr = [
    "Nível 1",
    ["Nível 2", 42, true],
    [
        ["Nível 3", "Item 1", "Cristo Rei!"],
        ["Nível 3", "Item 2", "Salve Maria!"]
    ],
    []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2])
console.log(arr[2][1][1])

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"]
]

//console.table(matriz)

//matriz.push(["Nova linha"])
//matriz[0].push("Nova")

for(let i = 0; i < matriz.length; i++) {
    for(let c = 0; c < matriz[i].length; c++) {
        let elemento = matriz[i][c]
        console.log(`Posição (${i}, ${c}) Valor: ${elemento}`)
    }
}

