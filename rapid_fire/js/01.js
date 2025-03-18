// Problem: Create an array containing different types of teas

let teas = ["Green", "White", "Lemon", "Black", "Oolong", "Herbal"]
// console.log(teas)

// Problem: Add "Chamomile Tea" to the existing list of teas

teas.push("Chamomile")
// console.log(teas)

// Problem: Remove "Oolong Tea" from the list of teas

// let updated_teas = teas.filter((element) => element !== "Oolong")
// let index = teas.indexOf("Oolong")
// if (index > -1) teas.splice(index, 1)
// console.log(teas)

// Problem: Filter the list to only include teas that are caffeinated

// let caffeinated_teas = teas.filter((element) => element !== "Herbal")
// console.log(caffeinated_teas)

// Problem: Sort the list of teas in alphabetical order

// teas.sort()
// console.log(teas)
// let test = ["🥚", "🐔"]
// test.sort()
// console.log(test)

// Problem: Use a for loop to print each type of tea in the array

// for (let i = 0; i < teas.length; i++) {
//     console.log(teas[i])
// }

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")

// let count = 0
// for (let i = 0; i < teas.length; i++) {
//     if (teas[i] !== "Herbal") count++
// }
// console.log(count)

// Problem: Use a for loop to create a new array with all tea names in uppercase

// let uppercase_teas = []
// for (let i = 0; i < teas.length; i++) {
//     uppercase_teas.push(teas[i].toLocaleUpperCase())
// }
// console.log(uppercase_teas)

// Problem: Use a for loop to find the tea name with the most characters

// let longest_tea = 0
// for (let i = 0; i < teas.length; i++) {
//     if (longest_tea < teas[i].length) {
//         longest_tea = teas[i].length
//     }
// }
// console.log(longest_tea)

// Problem: Use a for loop to reverse the order of the teas in the array

// let rev_arr = []
// for (let i = teas.length - 1; i > 0; i--) {
//     rev_arr.push(teas[i])
// }
// console.log(rev_arr)