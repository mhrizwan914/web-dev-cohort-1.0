// function workingDays(days) {
//     let num_of_days = 0
//     let i = 0
//     while (i < days.length) {
//         if (days[num_of_days] !== "Saturday" && days[num_of_days] !== "Sunday") {
//             num_of_days++
//         }
//         i++
//     }

//     return num_of_days
// }

// let results = workingDays(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])

// console.log(results)


// function totalStars(starLevels = [["*", "*", "*"], ["*", "*"], ["*"]]) {
//     let total = 0
//     for (let i = 0; i < starLevels.length; i++) {
//         total += starLevels[i].length
//     }
//     return total
// }

// let results = totalStars()

// console.log(results)

// function totalPrice(prices = [1.5, 2.3, 3.7]) {
//     let total = 0
//     for (let i = 0; i < prices.length; i++) {
//         total += prices[i]
//     }
//     return total
// }

// let results = totalPrice()

// console.log(results)

// function addGuest(guestList, newGuest) {
//     // Add the newGuest to guestList and return the updated list
//     let updated_list = guestList.push(newGuest)

//     console.log(updated_list)
// }

// addGuest(["Ahmed", "Bilal"].push, "Rizwan")

// function filterHealthy(foodList) {
//     // Remove unhealthy food and return updated list
//     let new_list = foodList.filter((food) => food !== "Burger")

//     return new_list
// }
// let result = filterHealthy(["Salad", "Burger", "Apple"])

// console.log(result)

// function writeLoveLetter(message, name) {
//     // Add name at the start of the message and return updated array
//     message.unshift(name)
//     return message
// }
// writeLoveLetter(["I", "Love", "You"], "Hoorain")

// let n = 5
// let diamond = '';

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         diamond += " "
//     }
//     for (let k = 1; k <= ((2 * i) - 1); k++) {
//         diamond += "*"
//     }
//     if (i !== n) diamond += "\n"
// }

// for (let i = n - 1; i >= 1; i--) {
//     diamond += "\n"
//     for (let j = 1; j <= n - i; j++) {
//         diamond += " "
//     }
//     for (let k = 1; k <= ((2 * i) - 1); k++) {
//         diamond += "*"
//     }
// }

// for (let i = 1; i <= n; i++) {
//     for (let j = n; j >= i; j--) {
//         diamond += "*"
//     }
//     if (i !== n) diamond += "\n"
// }

// console.log(diamond)

// function createStudentProfile(name, age, grade) {
//     // Return an object with name, age, and grade
//     if (
//         typeof name !== 'string' ||
//         name === "" ||
//         age <= 5 ||
//         !Number.isInteger(age) ||
//         typeof age !== 'number' ||
//         typeof grade !== 'string'
//     ) {
//         return "Invalid input"
//     }

//     return {
//         name,
//         age,
//         grade
//     }
// }

// console.log(createStudentProfile("", 5, "1st"))


// function addCarColor(car, color) {
//     // Add color property to the car object
//     if (typeof car !== "object" || typeof color !== "string" || color.length == 0) {
//         return "Invalid color"
//     }
//     car.color = color
//     return car
// }

// console.log(addCarColor({ brand: "Toyota", model: "Corolla" }, "Red"))

// function hasDiscount(product) {
//     // Check if product has discount property
//     if (typeof product === "object") {
//         return product.hasOwnProperty("discount")
//     }
// }

// console.log(hasDiscount({ name: "Laptop", price: 599, discount: 10 }))

// function removePassword(user) {
//     // Remove password property
//     if (
//         typeof user === "object" &&
//         user.hasOwnProperty("username") &&
//         user.hasOwnProperty("password") &&
//         user.password !== 0 &&
//         user.username !== 0 &&
//         typeof user.password === "string" &&
//         typeof user.username === "string"
//     ) {
//         delete user.password
//         return user
//     } else if (!user.hasOwnProperty("password")) {
//         return user
//     }
// }

// console.log(removePassword({ username: "rizwan", password: "123655" }))

// function countProperties(user) {
//     // Return the number of properties in user
//     if (typeof user === "object" && user.length !== 0) {
//         let len = Object.keys(user)
//         return len.length
//     }
// }

// console.log(countProperties({ name: "Rizwan", age: 25, email: "rizwan@gmail.com" }))

// function mergeObjects(obj1, obj2) {
//     // Merge obj1 and obj2 into a single object
//     if (typeof obj1 === "object" && typeof obj2 === "object") {
//         return { ...obj1, ...obj2 }
//     }
// }

// console.log(mergeObjects({ name: "Rizwan", age: 20 }, { age: 30, email: "rizwan@gmail.com" }))

// function objectToArray(obj) {
//     // Convert the object into an array of key-value pairs
//     if (typeof obj === "object") {
//         return Object.entries(obj)
//     }
// }

// console.log(objectToArray({ name: "Rizwan", age: 20 }))

// function cleanObject(obj) {
//     // Remove all properties with null or undefined values
//     for (const key in obj) {
//         if (obj[key] === null || obj[key] === undefined) {
//             delete obj[key]
//         }
//     }
//     return obj
// }

// console.log(cleanObject({ name: "Rizwan", age: 20, email: null, city: undefined }))

// function deepClone(obj) {
//     // Return a deep copy of obj
//     let deepobj = {}
//     if (typeof obj === "object") {
//         deepobj = JSON.stringify(obj)
//         return JSON.parse(deepobj)
//     }
// }

// console.log(deepClone({
//     name: "Alice",
//     age: 25,
//     address: {
//         city: "New York",
//         zip: 10001
//     }
// }))

// function getNestedValue(obj, keyPath) {
//     // Check if obj is a valid object and keyPath is a string
//     if (typeof obj !== 'object' || obj === null || typeof keyPath !== 'string') {
//         return "Key not found";
//     }

//     // Split keyPath into individual keys
//     const keys = keyPath.split('.');

//     // Reduce method to traverse the nested object
//     let result = obj;
//     for (let key of keys) {
//         if (result && key in result) {
//             result = result[key]; // Move deeper into the object
//         } else {
//             return "Key not found"; // If key is missing
//         }
//     }

//     return result;
// }

// console.log(getNestedValue({ user: { address: { city: "New York" } } }, "user.address.city"))

// function Robot(name, batteryLevel) {
//     // Initialize name and batteryLevel properties
//     this.name = name
//     this.batteryLevel = batteryLevel
// }

// Robot.prototype.charge = function () {
//     this.batteryLevel = Math.min(this.batteryLevel + 20, 100); // Add 20, but never go beyond 100
//     return this.batteryLevel;
// }


// let new1 = new Robot("Robot 1", 90)

// console.log(new1.charge());
