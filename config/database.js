import mongoose from "mongoose"

let connected = false

const connectDB = async () => {
    mongoose.set("strictQuery", true)

    //If the database is already connected,don't connect again

    if (connected) {
        console.log("MongoDB is already connected")
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true
        console.log("mongoDB connected")
    } catch (e) {
        console.log(e)
    }
}

export default connectDB
