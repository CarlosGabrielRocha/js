const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

// Desestruturação de Objetos.

const name = person.name

const { job, parents } = person

console.log(name, job, parents)

// Desestruturação de Arrays.

const [father, mother] = parents

console.log(father, mother)

// Desestruturando um objeto e usando suas propriedades como parâmetros.

function createUser({ name, job, parents }) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const luke = createUser(person)

console.log(luke)