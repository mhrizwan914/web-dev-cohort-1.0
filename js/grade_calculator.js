// A+ grade >= 90
// A grade >= 80
// B grade >= 70
// C grade >= 50
// F grade <= 49

function grade_find(marks) {
    if (marks >= 90) {
        return "A+"
    } else if (marks >= 80) {
        return "A"
    } else if (marks >= 70) {
        return "B"
    } else if (marks >= 50) {
        return "C"
    } else {
        return "F"
    }
}

let result = grade_find(56)

console.log(result)