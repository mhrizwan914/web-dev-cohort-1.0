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

// console.log(teas[2])
// console.log(`Total tea's is ${teas.length}`)
// console.log(teas.push("Ice Tea"))
// console.log(teas)
// console.log(teas.pop())

let index = teas.indexOf("Green Tea")

if (index !== -1) {
    teas.splice(index, 1)
}

// console.log(teas)

teas.forEach((chai, index) => {
    // console.log(`${index} of ${chai}`)
})

let more_teas = ["Ginger Tea", "Leaves Tea"]

let all_teas = teas.concat(teas, more_teas)

let new_teas = [...teas, "Ginger Tea", "Leaves Tea"]

// console.log(new_teas)

let recipe = {
    name: "Masala Chai",
    ingredients: {
        tea_leaves: "Asam Teas",
        milk: "Full Cream Milk",
        sugar: "Brown",
        spices: ["Dalchini", "Ginger"]
    },
    instructions: "Boil watter, add tea leaves, milk, sugar and spices"
}

// console.log(recipe["ingredients"]["spices"][0])


let updated_recipe = {
    ...recipe,
    expiery: "12 May 2025"
}

// console.log(updated_recipe)
// console.log(recipe)

// let { name: title, ingredients } = recipe // Object destructuring
// let [name: title, ingredients] = recipe // Array destructuring

function tea_shop(type) {
    if (type === "Masala Chai") {
        console.log("Chai is ready with some spices")
    } else {
        console.log("Preparing regular chai")
    }
}

// tea_shop()
// tea_shop("Masala Chai")

function online_store(bill) {
    let convert_num = Number(bill)
    if (!Number.isNaN(convert_num)) {
        // if (convert_num >= 1000) {
        //     let discount = convert_num * 0.10
        //     return bill - discount
        // } else {
        //     return bill
        // }
        return convert_num >= 1000 ? bill - (convert_num * 0.10) : bill
    }
    return "Bill is not iteger"
}

// console.log(online_store("1000"))
// console.log(online_store(999))

function trafic_sys(color) {
    if (typeof color === "string") {
        let str_case = color.toLowerCase()
        switch (str_case) {
            case "red":
                return "Stop"
            case "yellow":
                return "Slow down"
            case "green":
                return "Go"
            default:
                return "Challan time ☹"
        }
    }
    return "Color must be strings"
}

// console.log(trafic_sys("green"))
// console.log(trafic_sys("RED"))
// console.log(trafic_sys("YellOw"))
// console.log(trafic_sys(100))
// console.log(trafic_sys())
// console.log(trafic_sys(""))

function check_expres(expres) {
    if (expres) {
        return "Truthy"
    } else {
        return "Falsy"
    }
}

// console.log(check_expres(NaN))
// console.log(check_expres(1))
// console.log(check_expres(0))
// console.log(check_expres([]))
// console.log(check_expres({}))
// console.log(check_expres(null))
// console.log(check_expres(undefined))
// console.log(check_expres())


function login(username, password) {
    if (typeof password !== "string") {
        return "Password must be string or required"
    }
    if (username === "admin" && password === "123") {
        return "Login successful"
    } else {
        return "Invalid credentials"
    }
}

// console.log(login("admin", "123"))
// console.log(login("admin", "1234"))
// console.log(login("admin", 123))
// console.log(login("admin"))

let sales = [
    {
        product: "Laptop",
        price: 1200
    },
    {
        product: "Smartphone",
        price: 5000
    },
    {
        product: "Headphones",
        price: 300
    },
    {
        product: "Keyboard",
        price: 150
    }
]

let total = sales.reduce((acc, sale) => (sale.price + acc), 0)

// console.log(total)

let inventory = [
    {
        product: "Laptop",
        stock: 30
    },
    {
        product: "Smartphone",
        stock: 120
    },
    {
        product: "Headphones",
        stock: 45
    },
    {
        product: "Keyboard",
        stock: 70
    }
]

// check stock of a product which is less than 50

let low_stock = inventory.filter((product) => product.stock < 50)

// console.log(low_stock)

let user_activity = [
    {
        username: "Alice",
        login_attempt: 45
    },
    {
        username: "Bob",
        login_attempt: 72
    },
    {
        username: "Charle",
        login_attempt: 33
    }
]

let most_active_user = user_activity.reduce((acc, user) =>
    user.login_attempt > acc.login_attempt ? user : acc
)

// console.log(most_active_user)

let expenses = [
    {
        desc: "Groceries",
        amount: 50.75,
        category: "Food"
    },
    {
        desc: "Electricity Bill",
        amount: 120.50,
        category: "Utilities"
    },
    {
        desc: "Movie Tickets",
        amount: 30.00,
        category: "Entertainment"
    },
    {
        desc: "Monthly Rent",
        amount: 800.00,
        category: "Housing"
    },
    {
        desc: "Gym Membership",
        amount: 40.00,
        category: "Fitness"
    },
    {
        desc: "Groceries",
        amount: 50.75,
        category: "Food"
    },
    {
        desc: "Electricity Bill",
        amount: 120.50,
        category: "Utilities"
    },
    {
        desc: "Movie Tickets",
        amount: 30.00,
        category: "Entertainment"
    },
    {
        desc: "Monthly Rent",
        amount: 800.00,
        category: "Housing"
    },
    {
        desc: "Gym Membership",
        amount: 40.00,
        category: "Fitness"
    }
]

let expense_report = expenses.reduce((report, expense) => {
    if (!report[expense.category]) {
        report[expense.category] = 0
    }
    report[expense.category] += expense.amount
    return report
}, {})

// console.log(expense_report)

let tasks = [
    {
        desc: "Finish Homework",
        completed: false,
        priority: 1
    },
    {
        desc: "Buy Groceries",
        completed: true,
        priority: 2
    },
    {
        desc: "Clean the House",
        completed: false,
        priority: 3
    },
    {
        desc: "Prepare Presentation",
        completed: true,
        priority: 1
    },
    {
        desc: "Call Mom",
        completed: false,
        priority: 2
    },
    {
        desc: "Read a Book",
        completed: true,
        priority: 3
    }
]

let sorted_task = tasks
    .filter((task) => !task.completed)
    .sort((a, b) => a.priority - b.priority)

// console.log(sorted_task)

let movies = [
    {
        title: "The Shawshank Redemption",
        ratings: [5, 4, 5, 4]
    },
    {
        title: "The Dark Knight",
        ratings: [4, 4, 5, 4]
    },
    {
        title: "Inception",
        ratings: [5, 5, 4]
    },
    {
        title: "Forrest Gump",
        ratings: [4, 5, 4, 4]
    },
    {
        title: "The Matrix",
        ratings: [3, 4, 4, 3]
    }
]

let movies_ratings = movies.map((movie) => {
    let rating_sum = movie.ratings.reduce((acc, rating) => (
        acc + rating
    ))
    movie.ratings = (rating_sum / movie.ratings.length).toFixed(1)
    // let rating_avg = (rating_sum / movie.ratings.length).toFixed(1) 
    // return {title: movie.title, average_rating: rating_avg}
    return movie
})

// console.log(movies_ratings)
// console.log(movies)

// Call and Bind

let p_1 = {
    name: "Rizwan",
    greet: function () {
        console.log(`Hello! ${this.name}`)
    }
}

let p_2 = {
    name: "Ahsan"
}

p_1.greet.call(p_2)