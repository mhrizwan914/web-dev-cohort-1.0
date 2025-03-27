function multiply_by_5(num) {
    return num * 5
}

multiply_by_5.type = "Calculation"

// console.log(multiply_by_5(2))
// console.log(multiply_by_5.type)

function create_user(name, email) {
    this.name = name
    this.email = email
    console.log(this)
}

create_user.prototype.flag = function () {
    console.log(`User of ${this.name} is created with the email of ${this.email}`)
}

let one = new create_user("Rizwan", "rizwan@gmail.com")
let two = new create_user("Hamza", "hamza@gmail.com")

// console.log(one.flag())

let heros = ["Spiderman", "Superman", "Batman"]

let power_of_heros = {
    spiderman: "Sling",
    supperman: "Flying",
    batman: "Genius"
}

Object.prototype.one = function () {
    console.log("I'm available at All")
}

Array.prototype.two = function () {
    console.log("I'm available only in Arrays")
}

console.log(heros.one())
console.log(power_of_heros.two())
console.log(heros.two())