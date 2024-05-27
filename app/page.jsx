"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

const HomePage = () => {
    const { id } = useParams()
    return (
        <div>
            <h1 className="text-3xl">Welcome {id}</h1>
            <Link href="properties">show properties</Link>
        </div>
    )
}

export default HomePage
