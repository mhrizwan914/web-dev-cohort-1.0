// if
let is_user_logged_in = true
let temperatue = 50

// if (2 === "2") {
//     console.log('2 is Equal to 2');
// } else {
//     console.log('2 is Equal to 2, but Not type Equal');
// }

// if (temperatue <= 50) {
//     console.log("Temperature is Less Than 50")
// } else {
//     console.log("Temperature is Greater Than 50")
// }

// 2 == "2"
// < , > , <= , >= , == , != , === , !==

// let score = 200

// if (score > 100) {
//     // var power = "Fly" Not use
//     let power = "Fly"
//     console.log(`Now, you can ${power}`)
// }

// power variable is out of scope beacuse it's define in scope and with let keyword
// console.log(`Now, you can ${power}`)

let balance = 1000

// if (balance > 500) console.log("Balance is above and equal to 1000"), console.log("Balance is 1000");

// if (balance < 750) {
//     console.log("Balance is Less Than 750")
// } else if (balance < 850) {
//     console.log("Balance is Less Than 850")
// } else if (balance < 950) {
//     console.log("Balance is Less Than 950")
// } else {
//     console.log("Balance is Less Than 1200")
// }

let is_user_debit_card_added = true


// if (is_user_logged_in && is_user_debit_card_added) {
//     console.log("Allow to buy Courses")
// }

let is_user_from_google = true
let is_user_from_email = true

// if (is_user_from_google || is_user_from_email) {
//     console.log("User is Successfully Logged In")
// }

// Switch Case

let month_in_num = "Jan"

// switch (month_in_num) {
//     case "Jan":
//         console.log("Month is Jan")
//         break;
//     case 2:
//         console.log("Month is Feb")
//         break;
//     case 3:
//         console.log("Month is March")
//         break;
//     default:
//         console.log("Month is Another")
//         break;
// }

// truthy / falsy value

let user_email = [] // true
user_email = "info@mhrizwan.com" // true
user_email = "" // false
user_email = false // false
user_email = 0 // false
user_email = -0 // false
user_email = 0n // false
user_email = null // false
user_email = undefined // false
user_email = NaN // false
user_email = "0" // true
user_email = 'false' // true
user_email = "false" // true
user_email = " " // true
user_email = [] // true
user_email = {} // true
user_email = function () { } // true


// if (user_email.length === 0) {
//     console.log("User has Email")
// } else {
//     console.log("User has not Email")
// }

let empty_obj = {}

// if (Object.keys(empty_obj).length === 0) {
//     console.log("Object is Empty")
// }

// false == 0 , true
// false == '' , true
// 0 == '' , true