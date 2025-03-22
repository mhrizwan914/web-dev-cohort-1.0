// let person = {
//     height: 5.3,
//     f_name: "Muhammad",
//     l_name: "Rizwan",
//     hobbies: ["Coding", "JYM", "Travelling"],
//     address: {
//         h_no: 304,
//         street: "Garden West",
//         city: "Karachi",
//         state: "Sindh",
//         country: "Pakistan",
//         country_code: "PK"
//     },
//     get_full_name: function () {
//         return this.f_name + " " + this.l_name
//     }
// }

// console.log(person.get_full_name())

// let remote = {
//     color: "Black",
//     brand: "Samsung",
//     size: {
//         height: 4.5,
//         width: 2.1
//     },
//     turn_off: function () {
//         return "Remote is Off"
//     },
//     volume: function () {
//         return "Volume is High"
//     }
// }

// let p1 = {
//     f_name: "Muhammad",
//     l_name: "Rizwan",
//     address: {
//         h_no: 304,
//         street: "Garden West",
//         city: "Karachi",
//         state: "Sindh",
//         country: "Pakistan",
//         country_code: "PK"
//     },
// }

// let p2 = {
//     // f_name: p1.f_name,
//     // l_name: p1.l_name,
//     // address: p1.address
//     // we can use spread operater
//     ...p1, // This will create a shallow copy
//     // address: {
//     //     ...p1.address
//     // }
// }

// let copy_of_p1 = JSON.stringify(p1)

// let p2 = JSON.parse(copy_of_p1)

// p2.address.city = "Hyderabad"

// console.log(p2)
// console.log(p1)