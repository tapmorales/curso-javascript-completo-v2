export abstract class Animal {
    constructor(protected readonly categoria: string) { }

    mostrarCategoria(): void {
        console.log(`A categoria é: ${this.categoria}`)
    }

    abstract mostrarDetalhes(): void
    abstract idade: number
}

interface AnimalInterface {
    categoria: string;
    mostrarDetalhes(): void;
    idade?: number;
}

const laica: AnimalInterface = {
    categoria: "mamifero",
    mostrarDetalhes() {
        console.log("qualquer coisa")
    }
}

console.log(laica)

class Gato extends Animal {

    constructor(public nome: string, public idade: number) {
        super("mamifero")
    }

    mostrarDetalhes() {
        console.log("mostrar detalhe chamado")
    }
}

interface CachorroInterface {
    latir(): void
}

class Cachorro implements AnimalInterface, CachorroInterface {
    constructor(public categoria: string, public readonly nome: string, public idade?: number) { }

    mostrarDetalhes() {
        console.log("mostrarDetalhes de Cachorro")
        console.log(this.nome, this.categoria, (this.idade) ? this.idade + 1 : "")
    }

    latir() {
        console.log(this.nome, "está latindo")
    }
}

const mingal = new Gato("mingal", 5)
console.log(mingal)

const toto = new Cachorro("mamifero", "Toto")
toto.latir()
