function sum(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw Error("sum aceita apenas numeros")
    }
    return n1 + n2
}
