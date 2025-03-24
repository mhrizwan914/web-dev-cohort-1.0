// jab bhi hum literals say object bna ty hai to singleton nhi bnta hai agr constructor say bnty hai to sigleton bnayga

// Singleton
// Object.create()

// Object Literals

let car = Symbol("car_name")

const user = {
    name: "Rizwan",
    full_name: "Muhammad Rizwan",
    [car]: "Cultus",
    age: 18,
    location: "Karachi",
    email: "mhrizwan@gmail.com",
    is_logged_in: false,
    last_logged_in: ["Monday", "Staurday"]
}

// console.log(user.email)
// console.log(user["email"]) // by default its store and track as a string key
// console.log(typeof user[car])

user.email = "mhrizwan@chatgpt.com"
// Object.freeze(user)
user.email = "mhrizwan@facebook.com"

// console.log(user)

user.greetings = function () {
    return `Hello Mr. ${this.name}`
}

// console.log(user.greetings())

const obj1 = { a: "Apple", b: "Ball" }
const obj2 = {
    c: "Cat", d: "Dog", e: {
        e1: "Elephant",
        e2: "Engro"
    }
}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }
obj3.a = "Ant"
obj3.e.e1 = "Ant"
// console.log(obj3)
// console.log(obj1)
// console.log(obj2)

// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))
// console.log(Object.entries(obj3))
// console.log(Object.hasOwn(obj3.a))


// Destructuring
const course = {
    course_name: "JavaScript in Hindi",
    price: 599,
    validity: "Lifetime"
}

const { course_name: name, price, validity } = course

console.log(name, price, validity)
