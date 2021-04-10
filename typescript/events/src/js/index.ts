
const testEvent1 = document.querySelector("#testEvent") as HTMLElement
const testEvent2 = document.querySelector("#testEvent2") as HTMLElement
const testEvent3 = document.querySelector("#testEvent3")

type EventFire = (this: HTMLElement | Document, e: MouseEvent) => void

const eventFire: EventFire = function (evt: MouseEvent) {
    // console.log("eventFired")
    // console.log(evt)
    // console.log(this)
    const currentTearget = evt.currentTarget as HTMLElement
    const quantity = this.querySelector("span") as HTMLSpanElement
    const n = parseInt(quantity.textContent || "0")
    quantity.textContent = (n + 1).toString()

    if (this !== testEvent2 && this !== document) {
        const event = new Event("customclick")
        testEvent2.dispatchEvent(event)

        const event2 = new CustomEvent("customClick", { detail: n + 1 })
        testEvent3?.dispatchEvent(event2)
    }


}

testEvent1.addEventListener("click", eventFire)
testEvent2.addEventListener("customclick", eventFire as EventListener)
testEvent2.addEventListener("click", function (e) {
    console.log(e)
})

testEvent3?.addEventListener("customClick", function (e) {
    console.log(e)
})

// document.addEventListener("click", eventFire)