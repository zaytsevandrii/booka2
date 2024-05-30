import connectDB from "@/config/database"
import Property from "@/models/Property"

//Get ap/properties
export const GET = async (request) => {
    try {
        await connectDB()
        const properties = await Property.find({})
        return new Response(JSON.stringify(properties), { status: 200 })
    } catch (e) {
        return new Response("Something Went wrong", { status: 500 })
    }
}
