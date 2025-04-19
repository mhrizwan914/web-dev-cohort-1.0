// Mogoose
import mongoose from "mongoose"
// Bcryptjs
import bcrypt from "bcryptjs"

const user_schema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    is_verified: {
        type: Boolean,
        default: false
    },
    verification_token: String,
    p_reset_token: String,
    p_reset_token_expiry: Date
}, {
    timestamps: true
})

// Hookes
user_schema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

const User = mongoose.model("user", user_schema)

export default User