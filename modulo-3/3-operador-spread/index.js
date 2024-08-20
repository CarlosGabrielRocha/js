const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

// Vários parâmetros de uma só vez

console.log(towns)

console.log(...towns)

console.log(...towns[0]) // console.log(P, r, o, n...)

// Clonando Arrays sem afetar um array original, ou seja, não será uma referência mas sim um novo array

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({ towns, townsCopy })

const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({towns, townsCopy, townsClone})

// Clonando Objetos

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.teste = "Test"

console.log({ townsObj, townsObjClone })

