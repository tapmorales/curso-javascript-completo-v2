function latir() {
    console.log(this.name, " fala: au au")
}

function miar() {
    console.log(this.name, " fala: miau")
}


const dog = {
    name: "rex",
    falar() {
        console.log(this.name, " fala: au au")
    },

    falar2() {
        console.log("falar2")
    }
}

const cat = {
    name: "mingal",
    falar() {
        console.log(this)
        miar.call(this)
    }
}
dog.falar()
dog.falar2()
cat.falar()

