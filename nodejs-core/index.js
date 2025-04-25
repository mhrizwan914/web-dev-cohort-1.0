const fs = require("fs")
const math = require("./math")

fs.writeFileSync("hello.txt", "Hello World", () => { })

// console.log({ __dirname, __filename })
// console.log(math.add(5, 6))
console.log(math())


function __require() {
    // agr id . se shuru ho to user ki dir mai find kro
    // agr id kay sath . nhi ho to node ki ander dhondo
}