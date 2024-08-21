const simpleMean = (...nums) => {
    let sum = 0
    nums.forEach(num => sum += num)
    return sum / nums.length
}

console.log(simpleMean(2, 5, 7, 7, 8))

const weightedMean = (...pairs) => {

    let pairsSum = 0
    let pSum = 0
    pairs.forEach(pair => {
        pairsSum += pair.n * pair.p
        pSum += pair.p
    })

    return pairsSum / pSum

}

console.log(weightedMean({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 }))

const median = (...nums) => {

    const sortNums = [...nums]
    sortNums.sort((num1, num2) => {
        return num1 - num2
    })

    if (sortNums.length % 2 === 0) {
        return simpleMean(sortNums[sortNums.length / 2 - 1], sortNums[sortNums.length / 2])
    } else {
        return sortNums[Math.ceil(sortNums.length / 2 - 1)]
    }

}

console.log(median(9, 2, 6, 9, 10, 11, 1))

const mode = (...nums) => {

    let num = 0

    const numQuantity = nums.reduce((accum, num) => {
        if (accum[num]) {
            accum[num]++
        } else {
            accum[`${num}`] = 1
        }
        return accum
    }, {})

    const pairs = Object.entries(numQuantity)
    console.log(pairs)
    pairs.forEach(pair => {
        if (pair[1] > num) {
            num = pair[0]
        }
    })

    return num
}

console.log(mode(9, 4, 2, 3, 1, 2, 2, 4, 5, 9, 9, 9, 9, 9))


