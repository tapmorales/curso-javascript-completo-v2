const teste = "teste 8"

const arrowFn = n => n * n
console.log(arrowFn(2))

class Teste {
    constructor(n) {
        this.n = n
    }
}

console.log(new Teste(5))

const getAdress = async (cep) => {
    let url = `https://viacep.com.br/ws/${cep}/json/`
    try {
        const resposta = await fetch(url)
        if (!resposta.ok) throw Error("Invalid postal code")
        const json = await resposta.json()
        return json
    } catch (e) {
        throw e
    }
}

const endereco = getAdress("03136-050")
console.log(endereco)