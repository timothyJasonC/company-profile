export default function Overview() {
    return (
        <div className="items-center text-center pt-12 bg-white text-black">
            <div className="relative flex justify-center items-center">
                <span className="w-full h-[4px] max-md:h-[2px]  border-b-[5px] border-b-primary absolute top-6 max-md:top-4"></span>
                <div className="px-2 bg-white z-20 max-w-sm max-md:max-w-[15rem] mx-auto ">
                    <h1 className="text-5xl max-md:text-3xl font-medium text-primary">Why Choose Us</h1>
                </div>
            </div>
            <div className="ov-cont flex justify-center mt-24 px-12">
                <section className="container h-auto">
                    <div className="flex text-primary justify-center items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                        </svg>
                        <h2 className="text-5xl max-md:text-3xl">
                            Our Mission
                        </h2>
                    </div>
                    <p className="text-xl max-md:text-sm mt-4 text-center tracking-[.1rem] leading-[2rem]">Inspiring exceptional travel experiences, offering personalized services, unique destinations, and unforgettable adventures for memorable, fulfilling journeys.</p>
                </section>
                <section className="container">
                    <div className="flex text-primary justify-center items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <h2 className="text-5xl max-md:text-3xl">
                            Our Vision
                        </h2>
                    </div>
                    <p className="text-xl  max-md:text-sm mt-4 text-center tracking-[.1rem] leading-[2rem]">Leading in travel solutions with excellence, innovation, and customer focus. Expanding offerings, leveraging tech, fostering partnerships for global travel quality and accessibility.</p>
                </section>
                <section className="container">
                    <div className="flex text-primary justify-center items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                        </svg>

                        <h2 className="text-5xl max-md:text-3xl">
                            Our Values
                        </h2>
                    </div>
                    <p className="text-xl  max-md:text-sm mt-4 text-center tracking-[.1rem] leading-[2rem]">
                        We prioritize customer satisfaction and loyalty, operating with integrity, transparency, and high ethics. Our quality commitment exceeds expectations, fostering innovation, creativity, and community sustainability.
                    </p>
                </section>
            </div>
        </div>
    )
}