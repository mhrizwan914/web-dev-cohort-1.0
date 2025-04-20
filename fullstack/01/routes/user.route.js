// Express
import express from "express"
// Controllers
import { user_login, user_register, user_verify, user_profile, user_logout } from "../controllers/index.js"
// Middlewares
import { is_logged_in } from "../middlewares/auth.middleware.js"

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

// Profile
router.get("/profile", is_logged_in, user_profile)

// Profile
router.get("/logout", is_logged_in, user_logout)

export default router