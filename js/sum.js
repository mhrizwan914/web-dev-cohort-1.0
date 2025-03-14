let salaries = [10, 2, 5, 6, 8, 0]

function sum_of_array(container) {
    let total = 0;
    for (let i = 0; i < container.length; i++) {
        // total = total + container[i]
        total += container[i]
    }
    return total
}

console.log(sum_of_array(salaries))