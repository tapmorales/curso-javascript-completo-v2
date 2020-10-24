const Contador = (function () {

    let _symbol = Symbol()
    return class Contador {
        constructor(nome) {
            this.nome = nome
            this[_symbol] = 0
        }

        increment() {
            this[_symbol]++
            console.log(this.nome, this[_symbol])
        }

        get contador() {
            return this[_symbol]
        }
    }
})()

const c1 = new Contador("c1")
c1.increment()
c1.increment()
c1.increment()
c1.increment()
const c2 = new Contador("c2")
c2.increment()
console.log(c1.contador)
console.log(c2.contador)
console.log(c1)
console.log(Object.getOwnPropertySymbols(c1))
