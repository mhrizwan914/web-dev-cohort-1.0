let name = "Rizwan"
const pi = 3.14

let num = 42 // Number
let txt = "Hello" // String
let is_auth = true // Boolean
let nothing = null // Null or Object
let undef = undefined // undefined
let sym = Symbol() // Symbol

// console.log(typeof nothing)
// console.log(typeof undef)

let person = {
    name: "Rizwan",
    age: 25,
    is_student: true
}

// Data processing between servers and browsers

let data = "25y"
// let convert = Number(data)
// let convert = +data
let convert = parseInt(data)

// console.log(convert)
// if (!convert === NaN) {
//     console.log(typeof convert)
// } else {
//     console.log("Enter a valid number")
// }

let str = 123
let str_converted = String(str)

// Arthmetics

let a = 10
let b = 15

let sum = a + b
let sub = a - b
let mltiply = a * b
let divi = a / b
let remind = a % b
let power = a ** b

// Comparison

let x = 10
let y = 10

// console.log(x == y) // Equal to
// console.log(x !== y) // Not equal to
// console.log(x > y) // Grater then
// console.log(x < y) // Less then
// console.log(x <= y) // Less then and equal
// console.log(x >= y) // Greater then and equal

// Math
// console.log(Math.max(10, 20))
// console.log(Math.min(10, 20))
// console.log(Math.random())
// console.log(Math.random() * 6)
// console.log(Math.round(Math.random() * 5))
// console.log(Math.round((Math.random() * 5) + 1))

// Strings
let f_name = "Muhammad"
let l_name = "Rizwan"
let full_name = f_name + " " + l_name

// console.log(full_name)
// console.log(full_name.length)
// console.log(full_name.slice(0, 8))
// console.log(full_name.toUpperCase())
// console.log(`Hello ${full_name}, from Pakistan`)

// Array & Object

let teas = ["Green Tea", "Lemon Tea", "Ginger Tea"]

console.log(teas[2])
console.log(`Total tea's is ${teas.length}`)
console.log(teas.push("Ice Tea"))
console.log(teas)
console.log(teas.pop())