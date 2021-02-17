"use strict";
console.log("______________");
// mais longa
// class Animal {
//     categoria: string
//     constructor(categoria: string) {
//         this.categoria = categoria
//     }
// }
//mais curta
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log(`A categoria é: ${this.categoria}`);
    }
}
class Gato extends Animal {
    constructor(nome) {
        super("mamifero");
        this.nome = nome;
    }
    mostrarDetalhes() {
        console.log(this.nome, this.categoria);
    }
}
class Cachorro extends Animal {
    constructor(_nome) {
        super("mamifero");
        this._nome = _nome;
    }
    get nome() {
        console.log("get chamado");
        return this._nome;
    }
    set nome(n) {
        console.log("set chamado");
        this._nome = n;
    }
    mostrarDetalhes() {
        console.log(this._nome + " é um " + this.categoria);
    }
}
// const animal = new Animal("mamifero")
// console.log(animal)
// animal.mostrarCategoria()
// animal.categoria = "categoria editada fora da classe"
// console.log(animal)
const mingal = new Gato("mingal");
mingal.mostrarDetalhes();
// mingal.nome = "nome alterado"
const toto = new Cachorro("toto");
toto.nome = "novo nome de toto";
console.log('toto.nome: ', toto.nome);
toto.mostrarDetalhes();
toto.mostrarCategoria();
class Cliente {
    constructor() {
        this._listaAnimais = []; //Endereco de memoria AA
        this._tempListaAnimais = [];
    }
    adicionarAnimais(...animais) {
        this._listaAnimais.push(...animais);
        this._tempListaAnimais.length = 0;
        this._tempListaAnimais = [...this._listaAnimais];
    }
    get listaAnimais() {
        return [...this._tempListaAnimais];
    }
}
const daniel = new Cliente();
daniel.adicionarAnimais(toto, mingal);
daniel.listaAnimais.length = 0;
console.log(daniel);
