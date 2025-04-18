// Mogoose
import mongoose from "mongoose"

const user_schema = new mongoose.Schema({
    name: String,
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

const user = mongoose.model("user", user_schema)

export default user