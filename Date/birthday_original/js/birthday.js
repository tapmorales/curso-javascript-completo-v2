function quantoFaltaPara(m, d) {

    const dataAtual = new Date()
    dataAtual.setHours(0)
    dataAtual.setMinutes(0)
    dataAtual.setSeconds(0)
    dataAtual.setMilliseconds(0)

    let anoAtual = dataAtual.getFullYear()

    const dataNiver = new Date(anoAtual, m - 1, d)

    const dataAtualTS = +dataAtual
    const dataNiverTS = +dataNiver

    if (dataNiverTS < dataAtualTS) {
        dataNiver.setFullYear(++anoAtual)
        dataNiverTS = +dataNiver
    }

    const UM_DIA = 24 * 60 * 60 * 1000
    const diferenca = dataNiverTS - dataAtualTS

    return parseInt(diferenca / UM_DIA)




}
