(function () {
    const dateEventDOM = document.querySelector(".hero-content h1 span").innerText
    console.log(dateEventDOM)

    const dateEvent = getDate(dateEventDOM)
    console.log(dateEvent)

    const today = new Date()

    let left = dateEvent.getTime() - today.getTime()

    const ONE_MINUTE = 60 * 1000
    const ONE_HOUR = 60 * ONE_MINUTE
    const ONE_DAY = 24 * ONE_HOUR

    const daysLeft = parseInt(left / ONE_DAY)
    left = left - daysLeft * ONE_DAY

    const hoursLeft = parseInt(left / ONE_HOUR)
    left = left - hoursLeft * ONE_HOUR

    const minutesLeft = parseInt(left / ONE_MINUTE)
    left = left - minutesLeft * ONE_MINUTE

    const secondsLeft = parseInt(left / 1000)
    addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft)

    function addLeftTime(d, h, m, s) {
        const p = document.createElement("p")
        p.textContent = `Contagem regressiva: ${d} dias, ${h} horas, ${m} minutos, ${s} segundos `
        document.querySelector(".hero-content").appendChild(p)
    }





    function getDate(str) {
        const [date, hour] = str.split(" ")
        const [day, month, year] = date.split("/")
        const [h, m] = hour.split("H")

        return new Date(year, month - 1, day, h, m)
    }

})()