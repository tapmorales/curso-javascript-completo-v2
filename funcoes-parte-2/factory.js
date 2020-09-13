function criarCachorro(name) {
    let posicao = 0
    return {
        name,
        latir() {
            console.log(this.name, "está latindo")
        },
        andar(distancia) {
            posicao += distancia
            console.log(this.name, "andou ", distancia, " m")
        },

        get posicao() {
            console.log(`a posicao atual de ${this.name} é ${posicao}`)
            return posicao
        }
    }
}

const rex = criarCachorro("Rex")
rex.andar(10)
rex.andar(5)

console.log("rex.posicao")
console.log(rex.posicao)
console.log(rex)


const toto = criarCachorro("Totó")
toto.andar(20)
toto.andar(-3)
toto.andar(-17)
