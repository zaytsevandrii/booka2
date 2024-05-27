"use client"
import { useParams } from "next/navigation"

const PropertyPage = () => {
    const { id } = useParams()
    return <div>PropertyPage {id}</div>
}

export default PropertyPage
