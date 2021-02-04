function add2(x: number, y?: number) {
    if (y === undefined) {
        return null
    }
    return x + y
}

const teste2 = add2(10)


let teste3: number | string | boolean
teste3 = 10
teste3 = "teste 3"

teste3 = true

const User: {
    nome: string,
    idade?: number
} = {
    nome: "daniel"
}