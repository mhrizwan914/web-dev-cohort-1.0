const user = {
    username: "mhrizwan914",
    loggin_count: 8,
    signed_in: false,
    get_user_details: function () {
        // console.log(`User is ${this.username} and its logged in attempt is ${this.loggin_count}`)
        console.log(this)
    }
}

// console.log(user)
// console.log(user.get_user_details())
// console.log(this)

function user_obj(username, loggin_count, signed_in) {
    this.username = username
    this.loggin_count = loggin_count
    this.signed_in = signed_in

    this.get_user_details = function () {
        console.log(`User is ${this.username} and its logged in attempt is ${this.loggin_count}`)
    }

    // return this // it's implicity define
}

const user_one = new user_obj("mhrizwan914", 8, true)
const user_two = new user_obj("harry", 10, true)
const user_three = new user_obj("ahsan", 10, true)

// console.log(user_one)
// console.log(user_two)
// console.log(user_three)
// console.log(user_three.constructor)
console.log(user_one instanceof user_obj)



// Jab hum new keyword use karte hain, to JavaScript automatically ek empty object create karta hai aur usse class ka instance kehte hain. Is object ko this ke through access kiya jata hai.
// Jab hum new keyword use karte hain, to constructor function ko call kiya jata hai (agar aap class use kar rahe hain to constructor ko call kiya jata hai). Constructor ka kaam hota hai object ko initialize karna.
// Jab hum constructor function ko call karte hain, to jo arguments hum pass karte hain, unhe this object ke andar set kiya jata hai. Isse wo values object ke properties ban jaati hain.