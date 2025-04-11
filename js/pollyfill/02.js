Array.prototype.forEach = null
Array.prototype.map = null
Array.prototype.reduce = null

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (cb) {
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i, this)
        }
    }
}

let arr = [1, 2, 3]

// arr.forEach((elem, ind, arr) => {
//     console.log(elem, ind, arr)
// })

if (!Array.prototype.map) {
    Array.prototype.map = function (cb) {
        let new_arr = []
        for (let i = 0; i < this.length; i++) {
            new_arr.push(cb(this[i], i, this))
        }
        return new_arr
    }
}

let new_arr = arr.map((elem, ind, arr) => {
    return elem + ind
})

// console.log(new_arr)

if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (cb, acc) {
        if (this.length === 0 && acc === undefined) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        let initial = (acc === undefined) ? this[0] : acc
        let start = (acc === undefined) ? 1 : 0

        for (let i = start; i < this.length; i++) {
            initial = cb(initial, this[i])
        }
        return initial
    }
}

let new_red = arr.reduce((acc, curr) => (
    acc + curr
), 50)

console.log(new_red)