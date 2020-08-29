let arr = [4, 5, 10, 20, 35, 4, 5]
console.log(arr.indexOf(555))
console.log(arr.indexOf(555) > -1)

console.log(arr.includes(555))
console.log(arr.find(function (el) {
    return el > 1000
}))
console.log(arr.findIndex(function (el) {
    return el > 1000
}))