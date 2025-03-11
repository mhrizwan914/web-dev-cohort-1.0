const switch_theme = document.getElementById("switch_theme")
const body = document.body

// Load saved mode from localStorage
const darkMode = localStorage.getItem("dark-mode")
if (darkMode === "enabled") {
    body.classList.add("dark")
}

switch_theme.addEventListener("click", () => {
    body.classList.toggle("dark")
    if (body.classList.contains("dark")) {
        localStorage.setItem("dark-mode", "enabled")
    } else {
        localStorage.setItem("dark-mode", "disabled")
    }
})