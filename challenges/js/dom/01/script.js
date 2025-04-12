const bulb_btn = document.getElementById("toggleButton")
const bulb_elem = document.getElementById("bulb")
const status_elem = document.getElementById("status")
const body_elem = document.querySelector("body")

bulb_btn.addEventListener("click", function () {
    let is_off = bulb_elem.classList.contains("off")
    if (is_off) {
        bulb_elem.classList.remove("off")
        status_elem.textContent = "Status: On"
        body_elem.classList.remove("dark-mode")
    } else {
        bulb_elem.classList.add("off")
        status_elem.textContent = "Status: Off"
        body_elem.classList.add("dark-mode")
    }
})