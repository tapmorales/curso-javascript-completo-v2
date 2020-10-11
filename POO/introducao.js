function Animal(tipo) {
    if (tipo) this.tipo = tipo
}

let cachorro = new Animal("mamifero")
let gato = new Animal("mamifero")
let cobra = new Animal("reptil")
let peixe = new Animal()

let arr = new Array(1, 2, 3)

Animal.prototype.obterTipo = function () {
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"

console.log(peixe.tipo)

