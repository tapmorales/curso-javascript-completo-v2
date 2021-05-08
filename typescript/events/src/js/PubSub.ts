type Callback = (data?: Output) => void

export type Output = {
    data: any,
    type: string
}

type Subscribers = {
    [P in string]: Callback[]
}

export class PubSub {
    static subscribers: Subscribers = {}

    static subscribe(eventName: string, fn: Callback) {
        PubSub.subscribers[eventName] = PubSub.subscribers[eventName] || []
        PubSub.subscribers[eventName].push(fn)
    }

    static publish(eventName: string, data: any) {
        if (PubSub.subscribers[eventName]) {
            PubSub.subscribers[eventName].forEach((fn: Callback) => {
                const output: Output = { data, type: eventName }
                fn(output)
            })
        }
    }

    static unsubscribe(eventName: string, fn: Callback) {
        if (PubSub.subscribers[eventName]) {
            const index = PubSub.subscribers[eventName].findIndex((element: Function) => element === fn)
            if (index > -1) {
                PubSub.subscribers[eventName].splice(index, 1)

                if (PubSub.subscribers[eventName].length === 0) [
                    delete PubSub.subscribers[eventName]
                ]
            }
        }
    }
}

