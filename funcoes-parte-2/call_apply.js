// var name = "Daniel"
// const name2 = "Daniel 2"

function teste(str, n) {
    console.log(this.name)
    // console.log(this.name2)
    console.log(str, n)
}

teste.call({ name: "Maria" }, "string", 20)
teste.apply({ name: "João" }, [" da Silva", 28])
teste.call({ name: "João" }, ...[" da Silva", 28])

const teste2 = teste.bind({ name: "Joana" })

teste2("Joaquina", 30)
teste("Manuela", 40)

document.addEventListener("click", teste2)