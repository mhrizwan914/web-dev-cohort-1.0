let num_of_guest = 4
let pizza_size;

// small <= 2
// medium <= 5
// large

if (num_of_guest <= 2) {
    pizza_size = "Small"
} else if (num_of_guest <= 5) {
    pizza_size = "Medium"
} else {
    pizza_size = "Large"
}

console.log(pizza_size)