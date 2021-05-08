import { PubSub, Output } from './PubSub'

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

/* PubSub Design Pattern */
const pubsub = document.getElementById("pubsub") as HTMLElement

function teste(data?: Output) {
    console.log("teste")
    console.log(data?.type)
    pubsub.textContent = ` data: ${data?.data} - type: ${data?.type}`

}

PubSub.subscribe("EventTest1", teste)

PubSub.subscribe("EventTest2", teste)
PubSub.subscribe("EventTest3", teste)


PubSub.unsubscribe("EventTest1", teste)


console.log(PubSub.subscribers)


setTimeout(() => {
    PubSub.publish("EventTest3", "publish com timeout")
}, 3000)

PubSub.publish("EventTest3", 20)
PubSub.publish("EventTest", "ola mundo do pubsub")