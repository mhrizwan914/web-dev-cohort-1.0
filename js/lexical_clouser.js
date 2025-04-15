let name = "Rizwan"

function greet() {
    console.log(`Hello Mr!, ${name}`)
}

// console.log(`Outer Global: Hello Mr!, ${name}`)

// greet()

// let count = 0

// function increament() {
//     return ++count
// }

// console.log(increament())
// console.log(increament())
// count = 25
// console.log(increament())
// console.log(increament())

function increament() {
    let count = 0
    return function () {
        return ++count
    }
}

let x = increament()

console.log(x())
console.log(x())
console.log(x())

