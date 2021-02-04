function add2(x: number, y?: number) {
    if (y === undefined) {
        return null
    }
    return x + y
}

const teste2 = add2(10)

type testeAlias = number | string | boolean


let teste3: testeAlias
teste3 = 10
teste3 = "teste 3"

teste3 = true

let teste4: testeAlias
teste4 = 10

type User = {
    nome: string,
    idade?: number
}

const daniel: User = {
    nome: "daniel"
}

const maria: User = {
    nome: "maria",
    idade: 30
}


type Sizes = "12px" | "18px" | "24px"

const small: Sizes = "12px"
const normal: Sizes = "18px";

export default 1
