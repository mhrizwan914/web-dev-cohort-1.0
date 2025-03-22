// const p1 = {
//     f_name: "Muhammd",
//     l_name: "Rizwan",
//     full_name: function () {
//         if (this.l_name !== undefined) {
//             return `The person full name is ${this.f_name} ${this.l_name}`
//         } else {
//             return `The person full name is ${this.f_name}`
//         }
//     }
// }

// const p2 = {
//     f_name: "Ahsan",
//     l_name: "Sahal",
//     full_name: function () {
//         if (this.l_name !== undefined) {
//             return `The person full name is ${this.f_name} ${this.l_name}`
//         } else {
//             return `The person full name is ${this.f_name}`
//         }
//     }
// }

// console.log(p1.full_name())
// console.log(p2.full_name())

class Person {
    constructor(f_name, l_name) {
        this.f_name = f_name ?? ""
        this.l_name = l_name ?? ""
    }

    full_name() {
        if (this.l_name !== undefined && this.l_name == " ") {
            return `The person full name is ${this.f_name} ${this.l_name}`
        } else {
            return `The person full name is ${this.f_name}.`
        }
    }
}

const p1 = new Person("Muhammad")
const p2 = new Person("Ahsan", "Sahal")

console.log(p1.full_name())
console.log(p2.full_name())