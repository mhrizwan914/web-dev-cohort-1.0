Function.prototype.describe = function () {
    return `Function name is ${this.name}`
}

function greetings(name) {
    return `Hello Mr/Mrs ${name}`
}

// console.log(greetings("Muhammad Rizwan"))

// console.log(greetings.describe())


function sum(a, b) { // Declaration
    return a + b
}


const subtract = function (a, b) { // Expression
    return a - b
}

// First Class Function

function apply_operation(a, b, operation) {
    return operation(a, b)
}

let result = apply_operation(5, 3, (a, b) => a / b)

// console.log(result)

function create_counter() {
    let count = 0;
    return function () {
        count++
        return count
    }
}

let counter = create_counter()

// console.log(counter())

;(function(){
    console.log("Database is Connected")
})()

