// Express
import express from "express"
// Controllers
import { user_login, user_register, user_verify } from "../controllers/index.js"

// Initialize express router
const router = express.Router()

// All routes
router.get("/", function (req, res) {
    res.send("/login /register /verify")
})

// Login
router.post("/login", user_login)

//Register
router.post("/register", user_register)

// Verify
router.get("/verify/:token", user_verify)

export default router