const time_elem = document.getElementById("time")
const date_elem = document.getElementById("date")

function clock() {
    // Create Current Date instance
    const now = new Date()
    const hours = (now.getHours() % 12 || 12).toString().padStart(2, "0") // must know the concept of truthy and falsy
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")
    const am_pm = now.getHours() >= 12 ? "PM" : "AM"

    time_elem.textContent = `${hours}:${minutes}:${seconds}:${am_pm}`

    date_elem.textContent = now.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

setInterval(clock, 1000)

clock()
