// Express
import express from "express"
// Controllers
import { user_register } from "../controllers/index.js"

// Initialize express router
const router = express.Router()

//Register
router.get("/register", user_register)

export default router