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
        <div className="content h-[30rem] w-[25rem] max-md:w-[12.5rem]">
        <Image className="rounded-t-lg" src={image} alt={alt} width={400} height={300} />
        <div className="text-content max-md:mt-12">
            <span className="">{title}</span>
            <p>{text}</p>
            <Link href={'/servis'} className="btn mb-8 text-white">Read More</Link>
        </div>
    </div>

    )
}