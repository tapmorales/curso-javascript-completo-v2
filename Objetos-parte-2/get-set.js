let tipo = ""
// const tiposPermitidos = { "mamifero": true, "anfibio": true, "reptil": true }
const tiposPermitidos = ["mamifero", "anfibio"]

const cachorro = {
    name: "rex",
    get tipo() {
        return tipo
    },
    set tipo(_tipo) {
        // if (tiposPermitidos[_tipo]) { padrão objeto
        if (tiposPermitidos.indexOf(_tipo) >= 0) {
            tipo = _tipo
        }
    }
}


    // IIFE para evitar sujar escopo global
    ; (function () {
        let tipo = ""
        // const tiposPermitidos = { "mamifero": true, "anfibio": true, "reptil": true }
        const tiposPermitidos = ["mamifero", "anfibio"]

        const gato = {
            name: "mingal",
            get tipo() {
                return tipo
            },
            set tipo(_tipo) {
                // if (tiposPermitidos[_tipo]) { padrão objeto
                if (tiposPermitidos.indexOf(_tipo) >= 0) {
                    tipo = _tipo
                }
            }
        }
        this.gato = gato
    })()