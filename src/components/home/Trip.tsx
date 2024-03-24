import Carousel from "./carousel";

export default function Trip() {
    return (
        <section className="items-center text-center pt-6 sm:pt-12 bg-white">
            <div className="relative flex justify-center items-center">
                <span className="w-full h-[4px] max-md:h-[2px]  border-b-[3px] border-b-primary absolute top-6 max-md:top-3"></span>
                <div className="px-2 bg-white z-20 max-w-sm mx-auto ">
                    <h1 className="md:text-5xl text-xl font-medium text-primary">Our Services Trip</h1>
                </div>
            </div>

            <div  className="trip h-auto sm:mt-5 py-4 sm:py-12 items-center">
                <Carousel />
            </div>
        </section>
    )
}