import PropertyCard from "@/components/PropertyCard"
import { fetchProperties } from "@/utils/request"

const Properties = async () => {
    const properties = await fetchProperties()

    //Sort properties
    properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {properties.length === 0 ? (
                        <p>No properties found</p>
                    ) : (
                        properties.map((property) => <PropertyCard key={property.key} property={property} />)
                    )}
                </div>
            </div>
        </section>
    )
}

export default Properties
