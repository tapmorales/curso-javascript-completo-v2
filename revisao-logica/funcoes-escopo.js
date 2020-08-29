let n = "global"

function mostraN() {
    let n1 = "n1 local"

    if (true) {
        var n2 = "n2 dentro de if com var"
    }
    console.log(n2)
    console.log("valor de n1: " + n1)
    console.log("valor de n2: " + n2)
}
mostraN()

console.log("valor de n no escopo global: " + n)

function fnExt() {

    let n = "n local na funcao fnExt"

    function fnInt() {
        n = "n local na funcao fnInt"
        console.log(n)
    }
    fnInt()
    console.log(n)
}

fnExt()