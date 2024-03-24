'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Cards } from "./cards";
export default function Carousel() {
    return (

        <section className="collection text-white mx-auto">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                autoplay={{ delay: 3000 }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="">



                <SwiperSlide >
                    <Cards alt="" image={'/family.jpg'} title="Family Trip" text="Experience the joy of family adventures with our Family Trip package. Book now for unforgettable memories!" />
                </SwiperSlide>
                <SwiperSlide >
                    <Cards alt="" image={'/group.jpg'} title="Group" text="Unite with friends and loved ones through our Group package. Explore together and create lasting bonds. Reserve your spot today!" />
                </SwiperSlide>
                <SwiperSlide >
                    <Cards alt="" image={'/outbond.jpg'} title="Outbond Area" text="Embark on thrilling outdoor escapades with our Outbond Area package. Adventure awaits—reserve your experience now!" />
                </SwiperSlide>
                <SwiperSlide >
                    <Cards alt="" image={'/toyota.jpg'} title="Car" text="Discover the convenience of traveling with our Toyota car rental service on your favorite travel website. Book now for an unforgettable travel experience!" />
                </SwiperSlide>
                <SwiperSlide >
                    <Cards alt="" image={'/hiace.jpg'} title="Elf & Hiace" text="Explore the convenience of renting our spacious Elf or Hiace vans for your group travel needs. Book now for a comfortable and hassle-free journey!" />
                </SwiperSlide>

            </Swiper>
        </section>

    )
}