

// console.log(arr[-1])

let user = {
    username: "mhrizwan914",
    city: "Karachi",
    country: "Pakistan",
    age: 25,
    password: 123654789
}

let user_proxy = new Proxy(user, {
    get(target, prop) {
        if (prop === "password") {
            return "Access denied"
        }
        return target[prop]
    },
    set(target, prop, value) {
        target[prop] = value
        return true
    }
})
user_proxy.age = 26
// console.log(user_proxy.password)
// console.log(user.password)

function negative_index(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            let index = Number(prop)
            if (index < 0) {
                return target[target.length + index]
            }
            return target[index]
        },
        set(target, prop, value) {
            let index = Number(prop)
            if (index < 0) {
                target[target.length + index] = value
            } else {
                target[index] = value
            }
            return true
        }
    })
}
let arr = [1, 2, 3, 4, 5]

let new_arr = negative_index(arr)

// console.log(new_arr[-1])
// new_arr[-2] = 22
// console.log(new_arr)
// console.log(arr)