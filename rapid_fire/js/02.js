// Problem: Create an object representing a type of tea with properties for name, type and caffeine content
const teas = {
    name: "Lemon Tea",
    type: "Green",
    caffeine: "low",
    ingridiants: {
        organic: "Leaves",
        inorganic: "Sugar"
    }
}
// Problem: Access and print the name and type properties of the tea object
// console.log(teas.name)
// console.log(teas.type)

// Problem: Add a new property origin to the tea object
if (!teas.origin) {
    teas.origin = "Srilanka"
}
// console.log(teas)

// Problem: Change the caffeine level of the tea object to "Medium"
teas.caffeine = "Medium"
// console.log(teas.caffeine)

// Problem: Remove the type property from the tea object
delete teas.type
// console.log(teas)

// Problem: Check if the tea object has a property origin
// if (teas.origin) {
//     console.log(teas.origin)
// }
// console.log("origin" in teas)


// Problem: Use a for...in loop to print all properties of the tea object
// for (const key in teas) {
//     console.log(teas[key])
// }

// Problem: Create a nested object representing different types of teas and their properties
const all_teas = {
    green_tea: {
        name: "Green Tea",
        type: "Green",
        caffeine: "low"
    },
    black_tea: {
        name: "Black tea",
        type: "In Organic",
        caffeine: "Medium"
    },
}

// Problem: Create a copy of the tea object

let copy_teas = {
    ...teas
}
// console.log(copy_teas)

// Problem: Add a custom method describe to the tea object that returns a description string

teas.desc = function () {
    return `The ${this.name} is a ${this.type} tea with ${this.caffeine} caffeine. It contains ${this.ingridiants.organic} and ${this.ingridiants.inorganic}.`
}
// console.log(teas.desc())

// Problem: Merge two objects representing different teas into one

let new_merge = { ...teas, ...all_teas }

// console.log(new_merge)
