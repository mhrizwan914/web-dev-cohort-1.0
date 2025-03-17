// for

// for (let index = 1; index <= 10; index++) {
//     const element = index
//     if (element === 5) {
//         console.log("5 is the Best Number")
//     }
//     console.log(element)
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop is ${1}`)
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }

// let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Watermelon", "Peach", "Strawberry", "Blueberry"]

// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i]
//     console.log(element)
// }

// break and continue

// for (let i = 1; i <= 15; i++) {
//     if (i === 5) {
//         console.log("Number 5 is Detected")
//         break
//     }
//     console.log(`Value of i is ${i}`)
// }

// for (let i = 1; i <= 15; i++) {
//     if (i === 5) {
//         console.log("Number 5 is Detected")
//         continue
//     }
//     console.log(`Value of i is ${i}`)
// }

// while

// let i = 1;

// while (i <= 10) {
//     console.log(`Value of Even is ${i}`)
//     i = i + 2
// }

// while (i <= 9) {
//     console.log(`Value of Even is ${i}`)
//     i = i + 2
// }

// let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Watermelon", "Peach", "Strawberry", "Blueberry"]

// let i = 0

// while (i < fruits.length) {
//     console.log(`Fruit Name is ${fruits[i]}`)
//     i++
// }

// do while

// let score = 11

// do {
//     console.log(`Score is ${score}`)
//     score++
// } while (score <= 10)

// for of

// let numbers = [99, 2, 3, 4, 5]

// for (const num of numbers) {
//     console.log(`Value is ${num}`)
// }

// let greetings = "Hello World!"

// for (const greet of greetings) {
//     if (greet === ' ') {
//         continue
//     }
//     console.log(`Value is ${greet}`)
// }

// Map

// let map = new Map()
// map.set("PK", "Pakistan")
// map.set("IN", "India")
// map.set("BNG", "Bangladesh")
// map.set("PK", "Pakistan")

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key + ' = ' + value)
// }

// let new_obj = {
//     "PK": "Pakistan",
//     "IN": "India",
//     "BNG": "Bangladesh",
// }

// for (const [key, value] of new_obj) {
//     console.log(key + ' = ' + value)
// } Not Use with Object

// for (const key in new_obj) {
//     console.log(new_obj[key])
// }

// let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Watermelon", "Peach", "Strawberry", "Blueberry"]

// for (const key in fruits) {
//     console.log(fruits[key])
// }

// let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Watermelon", "Peach", "Strawberry", "Blueberry"]

// fruits.forEach((element) => (
//     console.log(element)
// ))

// let new_obj = [
//     {
//         lang: "Javascript",
//         extension: ".js"
//     },
//     {
//         lang: "PHP",
//         extension: ".php"
//     },
//     {
//         lang: "Python",
//         extension: ".py"
//     }
// ]

// new_obj.forEach((obj) => {
//     console.log(`Language is ${obj.lang} and File Extension  is ${obj.extension}`);
// })

//

// let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Watermelon", "Peach", "Strawberry", "Blueberry"]

// let values = fruits.forEach((element) => {
//     console.log(element)
//     return element
// })

// console.log(values)

// filter

// let numbers = [99, 2, 3, 4, 5]

// let values = numbers.filter((num) => num % 2 === 0)

// console.log(values)

// let nums = []

// numbers.forEach((element) => {
//     if (element % 2 === 0) {
//         nums.push(element)
//     }
// })

// console.log(nums)

// const books = [
//     {
//         title: "To Kill a Mockingbird",
//         genre: "Fiction",
//         publish: 1960,
//         edition: "1st"
//     },
//     {
//         title: "1984",
//         genre: "Dystopian",
//         publish: 1949,
//         edition: "3rd"
//     },
//     {
//         title: "The Great Gatsby",
//         genre: "Classic",
//         publish: 1925,
//         edition: "2nd"
//     },
//     {
//         title: "Moby-Dick",
//         genre: "Adventure",
//         publish: 1851,
//         edition: "5th"
//     },
//     {
//         title: "The Catcher in the Rye",
//         genre: "Fiction",
//         publish: 1951,
//         edition: "4th"
//     }
// ]

// let search = books.filter(({ genre }) => genre === "Fiction")

// search = books.filter(({ publish, genre }) => (publish > 1850 && genre === "Fiction"))

// console.log(search)

// let numbers = [99, 2, 3, 4, 5]

// let new_nums = numbers.map((num) => num + 10)

// let new_nums = numbers.forEach((num) => num + 10)

// let new_nums = numbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 100)

// console.log(new_nums)

// let expense = [500, 250, 360, 1000, 800]

// let ini = 0

// let total_expense = expense.reduce((acc, value) => (
//     acc + value
// ), ini)

// console.log(total_expense)
