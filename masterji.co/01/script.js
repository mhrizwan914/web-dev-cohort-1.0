// Get a Reference of Elemets
const quote_elem = document.querySelector(".quote")
const author_elem = document.querySelector(".author")
const new_quote = document.getElementById("new_quote")
const copy_quote = document.getElementById("copy_quote")
const share_twitter = document.getElementById("share_twitter")
const download = document.getElementById("download")
const capture = document.getElementById("capture")

// Get quote from API using fetch
function get_a_quote() {
    fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
        .then((response) => response.json())
        .then((data) => {
            const { data: final_data } = data
            quote_elem.textContent = `"${final_data.content}"`
            author_elem.textContent = final_data.author
        })
        .catch((error) => console.log(error))
}

// Calling function
get_a_quote()

// New quote listner
new_quote.addEventListener("click", get_a_quote)

// Create a funtion for copy quote
function copy_quote_clipboard() {
    const copy_text = quote_elem.textContent

    navigator.clipboard.writeText(copy_text)
        .then(() => {
            console.log("Quote copied to clipboard!")
        })
        .catch((error) => {
            console.log(error)
        })
}

// Copy quote listner
copy_quote.addEventListener("click", copy_quote_clipboard)

// Create a function of share on twitter
function share_on_twitter() {
    const content = quote_elem.textContent
    const encoded_content = encodeURIComponent(content)
    const twitter_url = `https://twitter.com/intent/tweet?text=${encoded_content}`
    window.open(twitter_url, "_blank")
}

// Share on twitter quote listner
share_twitter.addEventListener("click", share_on_twitter)

// Create a function that save quote as a image
function save_quote_img() {
    html2canvas(capture).then(canvas => {
        const imageData = canvas.toDataURL("image/png")

        const link = document.createElement("a")
        link.href = imageData
        link.download = "page-image.png"
        link.click()
    })
}

// Save as IMG listner
download.addEventListener("click", save_quote_img)