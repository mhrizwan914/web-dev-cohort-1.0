// Express
import express from "express"
// Dotenv
import dotenv from "dotenv"
// Cors
import cors from "cors"

dotenv.config()
const app = express()
const port = process.env.PORT || 3000 //3002, 4000, 5000, 5173, 8080, 8000
app.use(cors({
    origin: `http://localhost:4000`,
    methods: ["GET", "POST", "DELETE", "UPDATE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Dont use this ports // 80, 443, 23

app.get("/", function (req, res) {
    res.send("Muhammad Rizwan - Cohort")
})

app.get("/me", function (req, res) {
    res.send("Hello, I'm Muhammad Rizwan.")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})