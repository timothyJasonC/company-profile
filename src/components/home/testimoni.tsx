export default function Testimoni({image, name, email, text, alt}:any) {
    return (
        <div className="carousel-item max-sm:max-w-[20rem] max-w-sm flex flex-col border-2 border-gray-500 bg-white text-black rounded-3xl p-4">
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="sm:w-24 w-16 mask mask-squircle">
                        <img alt={alt} src={image} />
                    </div>
                </div>
                <div>
                    <p className="text-xl sm:text-2xl font-semibold">{name}</p>
                    <i className="text-xs sm:text-xl underline font-light">{email}</i>
                </div>
            </div>
            <p className="w-md mt-3 text-justify text-xs sm:text-xl">{text}</p>
        </div>
    )
}