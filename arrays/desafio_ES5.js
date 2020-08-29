function sum() {
    const numbers = []
    // for (let i = 0; i < arguments.length; i++) {
    //     numbers.push(arguments[i])
    // }
    // console.log(numbers)

    Array.prototype.forEach.call(arguments, function (argument) {
        numbers.push(argument)
    })
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0)

}
console.log(sum(1, 2, 3, 4, 5))

function avarege() {

    const soma = sum.apply(null, arguments)
    console.log(soma)

    return soma / arguments.length
}

console.log(avarege(1, 2, 3, 4, 5))

// sum.call(null, 1, 2, 3, 4, 5)
// sum.apply(null, [1, 2, 3, 4])
