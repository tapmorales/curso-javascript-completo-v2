(function () {
    const dateEventDOM = document.querySelector(".hero-content h1 span").innerText
    console.log(dateEventDOM)

    const dateEvent = getDate(dateEventDOM)
    console.log(dateEvent)

    const ONE_MINUTE = 60 * 1000
    const ONE_HOUR = 60 * ONE_MINUTE
    const ONE_DAY = 24 * ONE_HOUR

    const p = document.createElement("p")
    document.querySelector(".hero-content").appendChild(p)


    function updateDate() {
        const today = new Date()
        let left = dateEvent.getTime() - today.getTime()

        const daysLeft = parseInt(left / ONE_DAY)
        left = left - daysLeft * ONE_DAY

        const hoursLeft = parseInt(left / ONE_HOUR)
        left = left - hoursLeft * ONE_HOUR

        const minutesLeft = parseInt(left / ONE_MINUTE)
        left = left - minutesLeft * ONE_MINUTE

        const secondsLeft = parseInt(left / 1000)

        addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft)
    }

    updateDate()

    function addLeftTime(d, h, m, s) {

        p.textContent = `Contagem regressiva: ${d} dias, ${h} horas, ${m} minutos, ${s} segundos `

    }


    setInterval(updateDate, 1000)



    function getDate(str) {
        const [date, hour] = str.split(" ")
        const [day, month, year] = date.split("/")
        const [h, m] = hour.split("H")

        return new Date(year, month - 1, day, h, m)
    }

})()