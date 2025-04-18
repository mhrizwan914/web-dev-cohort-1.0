// Express
import express from "express"
// Dotenv
import dotenv from "dotenv"
// Cors
import cors from "cors"
// Utils
import db from "./utils/db_connection.js"
// All routes
import user_routes from "./routes/user.route.js"

// Config dotenv
dotenv.config()
// Initialize express
const app = express()
// Set port
const port = process.env.PORT || 3000 //3002, 4000, 5000, 5173, 8080, 8000
// Cors configurations
app.use(cors({
    origin: `http://localhost:${port}`,
    methods: ["GET", "POST", "DELETE", "UPDATE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))
// Recive data in JSON
app.use(express.json())
// URL encoded in JSON
app.use(express.urlencoded({ extended: true }))

//Dont use this ports // 80, 443, 23

// app.get("/", function (req, res) {
//     res.send("Muhammad Rizwan - Cohort")
// })

// app.get("/me", function (req, res) {
//     res.send("Hello, I'm Muhammad Rizwan.")
// })

// Call databse function
db()

// User routes
app.use("/api/v1/user", user_routes)

// Listen app
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})