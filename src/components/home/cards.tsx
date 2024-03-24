import Image from "next/image";
import Link from "next/link";

interface ICard{
    image: string
    title: string
    text: string
    alt: string
}

export const Cards: React.FC<ICard> = ({image, title, text, alt}) => {
    return (
        <div className="content md:h-[35rem] md:w-[25rem] w-[12.5rem] h-[23rem]">
        <Image className="rounded-t-lg " src={image} alt={alt} width={400} height={300} />
        <div className="text-content mt-2 sm:mt-6">
            <span className="text-xl sm:text-3xl">{title}</span>
            <p className="text-xs sm:text-sm">{text}</p>
            <Link href={'/service'} className="btn mb-8 text-white max-sm:p-1">Read More</Link>
        </div>
    </div>

    )
}