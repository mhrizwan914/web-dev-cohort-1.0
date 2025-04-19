// Models
import { User } from "../models/index.js"
// Token
import crypto from "crypto"
// Nodemailer
import nodemailer from "nodemailer"
// Bcryptjs
import bcrypt from "bcryptjs"
// JWT
import jwt from "jsonwebtoken"

// User login
const user_login = async (req, res) => {
    const { email, password } = req.body
    // Validate data
    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    try {
        // Check user existing
        const existing_user = await User.findOne({ email })
        if (!existing_user) {
            return res.status(400).json({
                message: "Invalid user or password"
            })
        }
        // Check password
        const check_password = await bcrypt.compare(password, existing_user.password)
        if (!check_password) {
            return res.status(400).json({
                message: "Invalid user or password"
            })
        }
        // Create token
        const token = jwt.sign({ id: existing_user._id }, process.env.JWT_TOKEN_STRING, { expiresIn: "24h" })
        // Set token in cookie
        const cookie_option = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 600 * 1000
        }
        res.cookie("token", token, cookie_option)

        return res.status(200).json({
            message: "User login successfully",
            user: {
                _id: existing_user._id,
                email: existing_user.email,
                role: existing_user.role,
                token
            }
        })
    } catch (error) {
        console.log("Error during user find in database", error)
    }
}

// User register
const user_register = async (req, res) => {
    // Get user data
    const { username, email, password } = req.body
    // Validate data
    if (!username || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try {
        // Check user existing
        const existing_user = await User.findOne({ email })
        if (existing_user) {
            return res.status(400).json({
                message: "User already exists",
            })
        }
        // Create user
        const user = await User.create({
            username,
            email,
            password
        })
        if (!user) {
            return res.status(400).json({
                message: "User not registered",
            })
        }
        // Create verification token
        const verification_token = crypto.randomBytes(32).toString("hex")
        // Store token
        user.verification_token = verification_token
        // Save token
        await user.save()
        if (user) {
            // Create Transporter
            const transporter = nodemailer.createTransport({
                host: process.env.MAILTRAP_HOST,
                port: process.env.MAILTRAP_PORT,
                secure: false,
                auth: {
                    user: process.env.MAILTRAP_USER,
                    pass: process.env.MAILTRAP_PASSWORD,
                },
            })
            // Create mail options
            const mail_options = {
                from: "dev.mr@inhousedept.com",
                to: "dev.mr@inhousedept.com",
                subject: "Account Verification - Web Dev Cohort 1.0",
                text: `Please click on the following link! <a href="localhost:4000/api/v1/user/verify/${verification_token}">Click Here</a>`
            }
            try {
                const info = await transporter.sendMail(mail_options)
                return res.status(200).json({
                    message: "User successfully registered",
                    email: info.messageId,
                    user,
                })
            } catch (error) {
                console.log("Error during verification email send", error)
            }
        }
    } catch (error) {
        console.log("Error during user register in database", error)
    }
}

// User verify
const user_verify = async (req, res) => {
    // Get token
    const { token } = req.params
    // Validate token
    if (!token) {
        return res.status(400).json({
            message: "Verification token is required"
        })
    }
    // Find token
    const user = await User.findOne({ verification_token: token })
    if (!user) {
        return res.status(400).json({
            message: "Verification token is invalid"
        })
    }
    user.is_verified = true
    user.verification_token = undefined
    await user.save()
    return res.status(201).json({
        message: "Email is verified successfully"
    })
}

// Export controllers
export { user_login, user_register, user_verify }