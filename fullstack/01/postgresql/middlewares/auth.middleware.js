// JWT
import jwt from "jsonwebtoken"

const is_logged_in = async (req, res, next) => {
    const { token } = req.cookies
    if (!token) {
        res.status(400).json({
            message: "Verification token is required"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_STRING)
        req.user = decoded
    } catch (error) {
        console.log("Error during authentication middleware", error)
    }
    next()
}

export { is_logged_in }