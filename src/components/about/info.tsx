import Image from "next/image";

export default function Info() {
    return (
        <div className="pt-32">
            <div className="flex justify-center items-center -space-x-2">
                <Image src={'/nuartha.png'} alt="" width={50} height={50} />
                <span className="text-4xl font-bold ">nuartha</span>
            </div>
            <div className="flex flex-col gap-4 text-lg max-md:text-xs max-w-[800px] mt-6 mx-auto text-justify max-lg:px-8">
                <p>Terbentuknya Nuartha Tours and Travel berawal pada tahun 2015 dari sebuah ide untuk mengembangkan sebuah usaha jasa pelayanan pariwisata. Ide ini terbentuk dikarenakan adanya peluang bagi Nuartha Tours and Travel untuk turut bersaing dalam dunia bisnis pariwisata Indonesia. Dengan mengedepankan pelayanan jasa pariwisata berkualitas dari tim internal dan vendor kami disertai pengembangan teknologi yang memberikan kemudahan dalam pencarian, kenyamanan dan kemudahan transaksi serta kepercayaan dan komunikasi antara kami dan masyarakat dalam pemenuhan kebutuhan jasa perjalanan dan pariwisata baik pemesanan kebutuhan transportasi publik dan non publik, akomodasi, tur, outbound dan hiburan lainnya seperti tiket masuk wisata dan lain sebagainya. Dengan didukung oleh manajemen yang berpengalaman dalam bidang jasa pelayanan, pariwisata dan event serta tim support yang kreatif dan inovatif, kami hadir di tengah masyarakat Indonesia untuk menjadi sahabat perjalanan dan wisata terbaik anda.</p>
                <p>Kegiatan pariwisata yang didalami oleh Nuartha Tours and Travel ini adalah segala kegiatan pariwisata yang berorientasi pada pengenalan alam dan ragam aneka budaya Indonesia serta menjadi informan perbedaannya dengan negara lain. Sesuai visi kami yaitu menjadi Biro Perjalanan Wisata (Travel Agent) yang mempunyai produk dan pelayanan yang berkualitas serta berorientasi pada kemudahan, kepuasan dan kenyamanan pelanggan. Kemudahan dalam pencarian kami, perencanaan pelanggan, informasi produk dan biaya, pembayaran dan fleksibilitas paket perjalanan wisata sesuai dengan keinginan pelanggan. Kepuasaan dalam pelayanan yang terbaik dan pengalaman baru yang didapat pelanggan diantaranya edukasi. Kenyamanan yang didapat dari elemen produk kami seperti transportasi, akomodasi hotel, rumah makan, dan program acara sesuai dengan standar perusahaan.
                    Kami siap melayani perjalanan wisata anda dengan memberikan yang terbaik dari kami dan memberikan pengalaman baru dalam perjalanan wisata.</p>
            </div>
        </div>
    )
}