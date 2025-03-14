// console.log("Hello from Cohort")

// Factory Syntax
function print_tea() {
    // For print any thing
    console.log("Tea is Ready")
}

function bring_brush(kitne) {
    console.log(`Bring the ${kitne} Brush`)
}

function do_jama_kro(pehlaNum, dosraNum) {
    return pehlaNum + dosraNum
}

bring_brush(4)
print_tea()
do_jama_kro(1, 1)
console.log(do_jama_kro(2, 3))