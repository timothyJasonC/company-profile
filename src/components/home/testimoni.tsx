export default function Testimoni({image, name, email, text, alt}:any) {
    return (
        <div className="carousel-item max-w-sm flex flex-col border-2 border-gray-500 bg-white text-black rounded-3xl p-4">
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                        <img alt={alt} src={image} />
                    </div>
                </div>
                <div>
                    <p className="text-2xl font-semibold">{name}</p>
                    <i className="underline font-light">{email}</i>
                </div>
            </div>
            <p className="w-md mt-3 text-justify">{text}</p>
        </div>
    )
}