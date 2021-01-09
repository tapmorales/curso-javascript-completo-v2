import axios from "axios"

const teste = "teste 9"
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
        const resposta = await axios.get(url)

        const json = resposta.data
        return json
    } catch (e) {
        throw e
    }
}
console.log("------")
getAdress("03136-050").then(data => console.log(data))