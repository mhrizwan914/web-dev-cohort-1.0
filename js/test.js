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