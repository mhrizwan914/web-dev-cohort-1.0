// Track
const carousel_track = document.getElementById("carouselTrack")
// Navigation
const carousel_nav = document.getElementById("carouselNav")
// Caption
const carousel_caption = document.getElementById("caption")
// Prev btn
const prev_btn = document.getElementById("prevButton")
// Next btn
const next_btn = document.getElementById("nextButton")
// Autoplay btn
const autoplay_btn = document.getElementById("autoPlayButton")
// Timer element
const timer_ele = document.getElementById("timerDisplay")
// Images array
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
]
// Slide nodes
let slide_nodes = []
// Navigation nodes
let navigation_nodes = []
// Total slides
const total_slides = images.length

images.forEach((e) => {
  let img_slide_tag = document.createElement("div")
  img_slide_tag.classList.add("carousel-slide")
  img_slide_tag.style.display = "none"
  img_slide_tag.style.backgroundImage = `url(${e.url})`
  carousel_track.append(img_slide_tag)
  slide_nodes.push(img_slide_tag)
})

images.forEach((e, i) => {
  let btn_tag = document.createElement("div")
  btn_tag.classList.add("carousel-indicator")
  btn_tag.setAttribute("data-slide", `${i}`)
  carousel_nav.append(btn_tag)
  navigation_nodes.push(btn_tag)
})

function change_slide(index) {
  slide_nodes.forEach((e) => e.style.display = "none")
  navigation_nodes.forEach((e) => e.classList.remove("active"))
  slide_nodes[index].style.display = "block"
  carousel_caption.textContent = images[index].caption
  navigation_nodes[index].classList.add("active")
}

function active_slide(initial = 0) {
  let current = initial
  for (let i = 0; i < total_slides; i++) {
    const element = navigation_nodes[i];
    if (element.classList.contains("active")) current += i
  }
  return current
}

navigation_nodes.forEach((e) => {
  e.addEventListener("click", function () {
    let target = Number(e.getAttribute("data-slide"))
    change_slide(target)
  })
})

prev_btn.addEventListener("click", function () {
  let current = active_slide()
  current === 0 ? change_slide(total_slides - 1) : change_slide(current - 1)
})

next_btn.addEventListener("click", function () {
  let current = active_slide(1)
  current === total_slides ? change_slide(total_slides - current) : change_slide((current - 1) + 1)
})

change_slide(2)

let ref = null
let left_ref = null

function count_down() {
  clearInterval(left_ref)
  let seconds = 5
  timer_ele.textContent = `Next slide in ${seconds}s`
  left_ref = setInterval(() => {
    --seconds
    if (seconds <= 0) seconds = 5
    timer_ele.textContent = `Next slide in ${seconds}s`
  }, 1 * 1000)
}

autoplay_btn.addEventListener("click", function () {
  let current = active_slide(1)
  let status = autoplay_btn.getAttribute("data-autoplay")
  if (status === "false") {
    count_down()
    ref = setInterval(() => {
      current === total_slides ? change_slide(total_slides - current) : change_slide((current - 1) + 1)
      current = active_slide(1)
    }, 5 * 1000)
    autoplay_btn.setAttribute("data-autoplay", "true")
    autoplay_btn.textContent = "Stop Auto Play"
  } else {
    clearInterval(ref)
    ref = null
    clearInterval(left_ref)
    left_ref = null
    autoplay_btn.setAttribute("data-autoplay", "false")
    autoplay_btn.textContent = "Start Auto Play"
    timer_ele.textContent = ``
  }
})