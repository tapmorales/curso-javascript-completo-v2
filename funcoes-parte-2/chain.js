const calc = {
    value: 0,
    soma(n) {
        this.value += n
        return this
    },
    subtrai(n) {
        this.value -= n
        return this
    },
    log() {
        console.log(this.value)
        return this
    }
}
calc.soma(5).soma(2).subtrai(3).soma(2).log().soma(4).log()

