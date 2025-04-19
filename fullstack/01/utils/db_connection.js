// Mogoose
import mongoose from "mongoose"

const db = () => {
    mongoose
        .connect(process.env.MONGO_DB_URI)
        .then(() => console.log("Database is Connected"))
        .catch((error) => console.log("Error during database connection", error))
}

export default db