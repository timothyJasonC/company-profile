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
        <div className="content">
        <Image className="rounded-t-lg" src={image} alt={alt} width={400} height={300} />
        <div className="text-content">
            <span className="">{title}</span>
            <p>{text}</p>
            <Link href={'/servis'} className="btn mb-8 text-white">Read More</Link>
        </div>
    </div>

    )
}