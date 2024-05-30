import Image from "next/image"

const PropertyHeaderImage = ({ image }) => {
    return (
        <section>
            <div className="container-xl m-auto">
                <div className="grid grid-cols-1">
                    <Image
                        height={0}
                        width={0}
                        src={`/images/properties/${image}`}
                        sizes="100vw"
                        alt=""
                        className="object-cover h-[400px] w-full"
                        priority={true}
                    />
                </div>
            </div>
        </section>
    )
}

export default PropertyHeaderImage
