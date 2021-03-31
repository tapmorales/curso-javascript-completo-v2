let numero = 1234567.890

console.log(numero.toFixed(5))
console.log(typeof numero.toFixed(5))

console.log(numero.toPrecision(15))
console.log(typeof numero.toPrecision(15))

console.log((123).toPrecision(6))

numero = 12.34567
console.log(numero.toExponential())
console.log(numero.toExponential(4))

numero = 15
console.log(numero.toString(2))
console.log(typeof numero.toString(2))

//0 - 0, 1 - 1, 2 - 01, 3 - 11

console.log((0).toString(2))
console.log((1).toString(2))
console.log((2).toString(2))
console.log((3).toString(2))
console.log((4).toString(2))
console.log((5).toString(2))
console.log((6).toString(2))
console.log((7).toString(2))
console.log((8).toString(2))

// 10 - a, 11 - b, 12 .... 15 - f
console.log((15).toString(16))
console.log((16).toString(16))

numero = 123456.789
console.log(numero.toLocaleString())
console.log(numero.toLocaleString("pt-BR"))
console.log(numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }))
console.log(numero.toLocaleString("pt-PT", { style: "currency", currency: "EUR" }))

console.log(Number.MAX_VALUE, Number.MIN_VALUE)

let numeroAsString = "a3.456"
console.log(isNaN(numeroAsString))
console.log(numeroAsString, typeof numeroAsString, parseFloat(numeroAsString))
