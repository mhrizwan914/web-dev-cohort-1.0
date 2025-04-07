let arr = [1, 2, 3, 4, 5]

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
// console.log(user_proxy.age)
// console.log(user.age)

function negative_index(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            if (prop < 0) {
                return target[target.length + prop]
            }
            return target[prop]
        }
    })
}

console.log(negative_index(arr))
