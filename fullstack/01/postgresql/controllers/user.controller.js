// Token
import crypto from "crypto"
// Nodemailer
import nodemailer from "nodemailer"
// JWT
import jwt from "jsonwebtoken"
// Bcryptjs
import bcrypt from "bcryptjs"
// Prisma Client
import { PrismaClient } from "@prisma/client"

// Create Prisma Instance
const prisma = new PrismaClient()

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
        const existing_user = await prisma.user.findUnique({ where: { email } })
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
        const token = jwt.sign({ id: existing_user.id }, process.env.JWT_TOKEN_STRING, { expiresIn: "24h" })
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
        return res.status(500).json({
            message: error?.message
        })
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
    prisma.user.findUnique({ where: { email } })
    try {
        // Check user existing
        const existing_user = await prisma.user.findUnique({ where: { email: email } })
        if (existing_user) {
            return res.status(400).json({
                message: "User already exists",
            })
        }
        // Hash password
        const hash_password = await bcrypt.hash(password, 10)
        // Create verification token
        const verification_token = crypto.randomBytes(32).toString("hex")

        // Create user
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hash_password,
                verification_token
            }
        })
        if (!user) {
            return res.status(400).json({
                message: "User not registered",
            })
        }
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

    try {
        // Find token
        const user = await prisma.user.findUnique({ where: { verification_token: token } })
        if (!user) {
            return res.status(400).json({
                message: "Verification token is invalid"
            })
        }

        await prisma.user.update({
            where: { verification_token: token },
            data: {
                is_verified: true,
                verification_token: null
            }
        })

        return res.status(201).json({
            message: "Email is verified successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: error?.message
        })
    }
}

// User profile
const user_profile = async (req, res) => {
    const { user } = req
    try {
        const verify_user = await prisma.user.findUnique({
            where: {
                id: user.id,
            },
            select: {
                username: true,
                email: true,
                role: true,
                is_verified: true,
            }
        })
        if (!verify_user) {
            return res.status(400).json({
                message: "User is not found"
            })
        }
        return res.status(200).json({
            message: "User found succefully",
            user: verify_user
        })
    } catch (error) {
        return res.status(500).json({
            message: error?.message
        })
    }
}

// User logout
const user_logout = async (req, res) => {
    if (!req.user) {
        return res.status(400).json({
            message: "User not found"
        })
    }
    try {
        res.cookie("token", "", {
            expiresIn: new Date(0)
        })
        return res.status(200).json({
            message: "User logout successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: error?.message
        })
    }
}

// User forgot password
const user_forgot_password = async (req, res) => {
    // Get data
    const { email } = req.body
    // Validate data
    if (!email) {
        return res.status(400).json({
            message: "User email is required"
        })
    }
    try {
        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) {
            return res.status(400).json({
                message: "User email is not found"
            })
        }
        // Create verification token
        const reset_token = crypto.randomBytes(32).toString("hex")
        // Store token
        const updated_user = await prisma.user.update({
            where: { email },
            data: {
                p_reset_token: reset_token,
                p_reset_token_expiry: new Date(Date.now() + (10 * 60 * 1000))
            }
        })

        // user.p_reset_token = reset_token
        // user.p_reset_token_expiry = new Date(Date.now() + (10 * 60 * 1000))
        // Save token
        // await user.save()
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
            subject: "Reset Verification - Web Dev Cohort 1.0",
            text: `Please click on the following link! <a href="localhost:4000/api/v1/user/reset-password/${reset_token}">Click Here</a>`
        }
        try {
            const info = await transporter.sendMail(mail_options)
            return res.status(200).json({
                message: "Reset request send successfully",
                email: info.messageId,
                user: updated_user
            })
        } catch (error) {
            return res.status(500).json({
                message: error?.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error?.message
        })
    }
}

// User reset password
const user_reset_password = async (req, res) => {
    // Get data 
    const { password } = req.body
    const { token } = req.params
    if (!token || !password) {
        return res.status(400).json({
            message: "Password or Verifcation is required",
        })
    }
    try {
        const user = await prisma.user.findFirst({
            where: {
                p_reset_token: token,
                p_reset_token_expiry: {
                    gt: new Date()
                }
            }
        })
        if (!user) {
            return res.status(400).json({
                message: "User not found",
            })
        }
        // Hash password
        const hash_password = await bcrypt.hash(password, 10)

        await prisma.user.update({
            where: { id: user.id },
            data: {
                password: hash_password
            }
        })

        // user.password = password
        // await user.save()
        return res.status(200).json({
            message: "User password reset successfully",
        })
    } catch (error) {
        return res.status(500).json({
            message: error?.message
        })
    }
}

// Export controllers
export { user_login, user_register, user_verify, user_profile, user_logout, user_forgot_password, user_reset_password }