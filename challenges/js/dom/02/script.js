const title_elem = document.getElementById("mainHeading")
const red_btn = document.getElementById("redButton")
const green_btn = document.getElementById("greenButton")
const blue_btn = document.getElementById("blueButton")
const purple_btn = document.getElementById("purpleButton")
const reset_btn = document.getElementById("resetButton")

let colors_arr = [red_btn, green_btn, blue_btn, purple_btn]

colors_arr.forEach((e) => {
    e.addEventListener("click", function () {
        let color = window.getComputedStyle(e).backgroundColor
        title_elem.style.color = `${color}`
    })
})

reset_btn.addEventListener("click", function () {
    title_elem.style.color = null
})