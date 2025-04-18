// Utils
import db from "../utils/db_connection.js"

// Register user
const user_register = (req, res) => {
    res.send("Registered")
}

// Export controllers

export { user_register }