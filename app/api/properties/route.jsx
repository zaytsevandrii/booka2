import connectDB from "@/config/database"

export const GET = async (reques) => {
    try {
        await connectDB
        return new Response(JSON.stringify({ message: "Hello status" }), { status: 200 })
    } catch (e) {
        return new Response("Something Went wrong", { status: 500 })
    }
}
