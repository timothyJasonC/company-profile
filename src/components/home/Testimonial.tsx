import Testimoni from "./testimoni"

export default function Testimonial() {
    return (
        <div className="items-center text-center pt-12 bg-white">
            <div className="relative flex justify-center items-center">
                <span className="w-full h-[4px] max-md:h-[2px]  border-b-[5px] border-b-primary absolute top-6 max-md:top-4"></span>
                <div className="px-2 bg-white z-20 max-w-sm max-md:max-w-[15rem] mx-auto ">
                    <h1 className="text-5xl max-md:text-3xl font-medium text-primary">Our Testimonials</h1>
                </div>
            </div>
            <div className="carousel carousel-center max-w-full p-4 space-x-4 rounded-box text-black">
                <Testimoni alt='' image={'https://randomuser.me/api/portraits/med/men/75.jpg'} name={'Jennie Nichols'} email={'jennie.nichols@example.com'} text={'Sungguh terkesan dengan kemudahan dan kecepatan pemesanan di web travel ini. Destinasi yang ditawarkan sangat beragam dan layanan pelanggan yang ramah membuat pengalaman liburan saya menjadi sempurna!'} />
                <Testimoni alt='' image={'https://randomuser.me/api/portraits/women/85.jpg' } name={'Miriam Morrison'} email={'miriam.morrison@example.co'} text={'Web travel ini adalah teman setia saya dalam merencanakan perjalanan. Saya sangat senang dengan antarmuka yang intuitif dan responsif, serta berbagai pilihan destinasi yang menarik. Sangat direkomendasikan!' } />
                <Testimoni alt='' image={ 'https://randomuser.me/api/portraits/men/65.jpg'} name={'Chad Stanley'} email={'chad.stanley@example.com' } text={ 'Terima kasih kepada web travel ini karena telah memberikan pengalaman liburan yang tak terlupakan. Dari proses pemesanan hingga akomodasi, semuanya berjalan dengan lancar. Saya pasti akan menggunakan layanan ini lagi di masa mendatang.'} />
                <Testimoni alt='' image={'https://randomuser.me/api/portraits/men/23.jpg' } name={'Jesse Sutton'} email={'jesse.sutton@example.com'} text={'Pengalaman menggunakan web travel ini sungguh menyenangkan. Proses pemesanan yang cepat dan mudah, ditambah dengan pilihan destinasi yang menarik, membuat liburan saya menjadi lebih berkesan. Sangat puas dengan layanan mereka!'} />
                <Testimoni alt='' image={'https://randomuser.me/api/portraits/men/18.jpg'} name={'Walter Wallace'} email={'walter.wallace@example.com'} text={'Web travel ini adalah jawaban bagi saya dalam merencanakan liburan impian saya. Dengan berbagai pilihan destinasi yang disediakan, saya dapat menemukan tempat yang sesuai dengan preferensi saya. Layanan pelanggan yang ramah dan profesional membuat semuanya menjadi lebih baik!'} />
                <Testimoni alt='' image={'https://randomuser.me/api/portraits/men/8.jpg'} name={'Eduardo Chapman'} email={'eduardo.chapman@example.com'} text={'Sebagai pelanggan setia web travel ini, saya tidak bisa lebih puas dengan layanan yang mereka berikan. Dari mulai pemesanan hingga pulang dari liburan, semuanya berjalan dengan lancar. Terima kasih atas pengalaman yang luar biasa!'} />
                <Testimoni alt='' image={'https://randomuser.me/api/portraits/men/89.jpg'} name={'Justin Mckinney'} email={'justin.mckinney@example.com'} text={'Web travel ini telah menjadi mitra terpercaya saya dalam menjelajahi dunia. Antarmuka yang mudah digunakan dan layanan pelanggan yang responsif membuat setiap perjalanan saya menjadi menyenangkan dan bebas stres. Sungguh direkomendasikan!'} />
                <Testimoni alt='' image={'https://randomuser.me/api/portraits/men/84.jpg'} name={'Derek Bell'} email={'derek.bell@example.com'} text={'Pengalaman menggunakan web travel ini sungguh memuaskan. Saya sangat terkesan dengan kecepatan dan kemudahan pemesanan, serta berbagai opsi paket liburan yang mereka tawarkan. Semua staff juga sangat ramah dan membantu.'} />
                <Testimoni alt='' image={'https://randomuser.me/api/portraits/women/81.jpg'} name={'Shannon Richards'} email={'shannon.richards@example.com'} text={'Web travel ini memberikan pengalaman liburan yang tak terlupakan bagi saya dan keluarga. Dari destinasi yang menakjubkan hingga akomodasi yang nyaman, semuanya dipenuhi dengan standar kualitas tertinggi. Sangat direkomendasikan untuk semua orang!'} />
                <Testimoni alt='' image={'https://randomuser.me/api/portraits/women/45.jpg'} name={'Emma Hernandez'} email={'emma.hernandez@example.com'} text={'Penggunaan web travel ini sungguh memberikan nilai tambah bagi liburan saya. Dengan layanan yang cepat, efisien, dan ramah pengguna, saya merasa nyaman dan percaya diri dalam merencanakan perjalanan saya. Terima kasih atas pengalaman yang luar biasa!'} />

            </div>
        </div>
    )
}