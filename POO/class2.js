// Factories
const cachorroProto = {
    latir() {
        console.log(this.name, "está latindo")
    },
    andar(distancia) {
        this.posicao += distancia
        console.log(this.name, "andou ", distancia, " m")
    }
}
function criarCachorro(name) {
    let posicao = 0

    const obj = {
        name,
        get posicao() {
            console.log(`a posicao atual de ${this.name} é ${posicao}`)
            return posicao
        },

        set posicao(newPosition) {
            console.log(`a nova posicao de ${this.name} é ${newPosition}`)
            posicao = newPosition
        }
    }

    Object.setPrototypeOf(obj, cachorroProto)

    return obj
}
let dog1 = criarCachorro("dog1")
let dog2 = criarCachorro("dog2")



//ES5
function Animal(tipo) {
    if (this instanceof Animal) {
        if (tipo) this.tipo = tipo
    } else {
        throw new Error("Animal must be created with new operator")
    }
}

function Cachorro(nome) {
    this.nome = nome
    Animal.call(this, "mamifero")
    // this.constructor = Cachorro
    this.comer = function () {
        console.log(`${this.nome} está comendo`)
    }
}

Cachorro.prototype = new Animal()
Cachorro.prototype.latir = function () {
    console.log(`${this.nome} está atindo`)
}
Cachorro.prototype.constructor = Cachorro

let dog = new Cachorro("Dog")

Animal.prototype.obterTipo = function () {
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"



// ES6
class AnimalC {
    constructor(tipo) {
        if (tipo) {
            this.tipo = tipo
        }
    }

    obterTipo() {
        return this.tipo
    }
}

class GatoC extends AnimalC {
    constructor(nome) {
        super("mamifero")
        this.nome = nome
        this.comer = function () {
            console.log(`${this.nome} está comendo`)
        }
    }
}

AnimalC.prototype.tipo = "desconhecido"

let animal = new AnimalC("anfibio")
let sapo = new AnimalC()

let mingal = new GatoC("mingal")


// console.log(animal)
// console.log(gato)
// console.log(typeof animal)
// console.log(typeof gato)
// console.log(typeof Animal)
// console.log(typeof AnimalC)
// console.log(animal.obterTipo())
// console.log(gato.obterTipo())
console.log(Animal.prototype)
console.log(AnimalC.prototype)
console.log(mingal)
console.log(dog)
