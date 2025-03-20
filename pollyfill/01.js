if (!Array.prototype.optimize_map) {
    Array.prototype.optimize_map = function (callback) {
        let original_arr = this
        let new_arr = []
        for (let i = 0; i < original_arr.length; i++) {
            let value = callback(original_arr[i], i, original_arr)
            new_arr.push(value)
        }
        return new_arr
    }
}

if (!Array.prototype.optimize_for_each) {
    Array.prototype.optimize_for_each = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i)
        }
    }
}

if (!Array.prototype.optimize_filter) {
    Array.prototype.optimize_filter = function (callback) {
        let result = []
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i])) {
                result.push(this[i])
            }
        }
        return result
    }
}

// Problem : .map() function is not defined

let arr = [1, 2, 3, 4, 5]

// .map() , Return new Array , Function (element, index, array)

let new_arr = arr.optimize_map((element) => element * 2)

// console.log(new_arr)

// .forEach() , Function (element, index, array)

// arr.optimize_for_each((element, i) => {
//     console.log(element * i)
// })

// filter() , callback , new array return,

let fil_arr = arr.optimize_filter((element) => element > 2)

// console.log(fil_arr)