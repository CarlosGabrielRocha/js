let a = 0
let b = a || 42

console.log({ a, b })

b = a ?? 42

console.log({ a, b })
