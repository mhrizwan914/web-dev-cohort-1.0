// let's suppose we make a server call for weather update and it can return rainy, cloudy and sunny

let weather = "rainy"

let result = weather === "rainy"

if (result) {
    console.log("Please take your Umberalla")
} else if (weather === "cloudy") {
    console.log("Please wear your Jacket")
} else {
    console.log("It's Sunny, Have a nice day!")
}

console.log(weather == "Rainy")