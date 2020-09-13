function teste(n1, n2, ...ns) {
    console.log(n1)
    console.log(n2)
    console.log(ns)
    ns = ns.map(n => n * 2)
    console.log(typeof ns)
    console.log(ns)

}

teste(1)