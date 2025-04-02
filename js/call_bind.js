let p_1 = {
    name: "Rizwan",
    greet: function () {
        console.log(`Hello! ${this.name}`)
    }
}

let p_2 = {
    name: "Ahsan"
}

p_1.greet.call(p_2)