import { useEffect, useState } from "react"

function ViewImage({ image, setViewImage }) {
    
    return (
        <div className="fixed inset-0 w-full h-full bg-black/50 flex items-center justify-center">
            <div className="w-8/10 flex flex-col gap-8">
                <div className="flex justify-end">
                    <button
                        className="px-2 text-2xl z-50 font-semibold text-red-800 border-2 cursor-pointer hover:bg-red-800
                        hover:text-white hover:border-white"
                        onClick={() => setViewImage(false)}
                    >
                        X
                    </button>
                </div>
                <picture>
                    <img src={image.ref} alt={image.title} />
                </picture>
            </div>
        </div>
    )
}

export default function ProjectImage({ image }) {
    const [viewImage, setViewImage] = useState(false)
    return (
        <>
        <div
            className="bg-indigo-900 p-8 rounded-3xl cursor-pointer flex flex-col gap-6"
            onClick={() => {setViewImage(true); console.log(viewImage)}}
        >
            <h3 className="text-2xl font-normal">{image.title}</h3>
            <picture>
                <img src={image.ref} alt={image.title} className="w-160" />
            </picture>
        </div>

        {viewImage &&
            <ViewImage image={image} setViewImage={setViewImage}/>
        }
        </>
    )
}
