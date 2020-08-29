/*
Pode receber um ou mais valores numéricos
Deve retornar um único número
Deve gerar um erro se receber um parâmetro não número
Deve retornar zero caso não receba nenhum parâmetro
*/

(function () {
    function calcularMedia() {
        let total = 0;
        let qtd = arguments.length;
        for (let i = 0; i < qtd; i++) {
            if (typeof arguments[i] !== "number") {
                throw Error("only numbers")
            }
            total += arguments[i]
        }
        return (total / qtd) || 0
    }

    let media = calcularMedia(2, 3, 4)
    console.log(media)
})()