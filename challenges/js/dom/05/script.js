const carousel_track = document.getElementById("carouselTrack")
const carousel_nav = document.getElementById("carouselNav")
const prev_btn = document.getElementById("prevButton")
const next_btn = document.getElementById("nextButton")
const img_arr = ["./images/1.avif", "./images/2.avif", "./images/3.avif"]
const img_node = []

img_arr.forEach((e, i) => {
    let img_tag = document.createElement("img")
    img_tag.setAttribute("alt", `carousel-${i}`)
    img_tag.setAttribute("src", e)
    img_node.push(img_tag)
})

carousel_track.append(img_node[0])

img_arr.forEach((e, i) => {
    let btn_tag = document.createElement("div")
    btn_tag.classList.add("carousel-indicator")
    carousel_nav.append(btn_tag)
})

prev_btn.addEventListener("click", function () {
    carousel_track.append(img_node[img_node.length - 1])
})