// window is a global object it comes with broswer functionalities
// console.log(window)
// alert("Muhammad Rizwan")

// function change_body_bg_dark() {
//     document.body.style.background = "black"
// }
// function change_body_bg_light() {
//     document.body.style.background = "white"
// }

// function change_body_bg(color) {
//     document.body.style.background = color
// }

let button = document.querySelector('button')

button.addEventListener("click", function () {
    console.log("I got click")
    if (!document.body.style.background || document.body.style.background == "white") {
        document.body.style.background = "black"
    } else {
        document.body.style.background = "white"
    }
})