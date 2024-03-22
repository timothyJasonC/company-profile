import Link from "next/link";

export default function Contact () {
    return(
        <section className="max-w-[800px] grid grid-cols-2 max-sm:grid-cols-1 gap-3 max-md:text-sm m-auto py-6 text-gray-600 max-lg:px-8">
            <div>
                <h1>Head Office :</h1>
                <p>PT Nuartha Global Indonesia</p>
                <p>Jalan Gegerkalong Girang Baru No. 13, isola, Sukasari 40154 Kota Bandung</p>
                <p>Perwakilan :</p>
                <p>Jakarta, Yogyakarta, Bali & Labuan Bajo</p>
            </div>
            <div>
                <h1>Contact Us :</h1>
                <p>Telp/Fax : (022) 20284746</p>
                <p>Call Centre : 0812 2039 9965</p>
                <p>Webmail : Info@Nuarthatours.Com</p>
                <p>Gmail : Nuarthatours@Gmail.Com</p>
                <Link href={'/teams'} className="font-medium  hover:text-black hover:underline">See Our Teams →</Link>
            </div>
        </section>
    )
}