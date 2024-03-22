import Carousel from "./carousel";

export default function Trip() {
    return (
        <section className="items-center text-center pt-12 bg-white ">
            <div className="relative flex justify-center items-center">
                <span className="w-full h-[4px] max-md:h-[2px]  border-b-[5px] border-b-primary absolute top-6 max-md:top-4"></span>
                <div className="px-2 bg-white z-20 max-w-sm max-md:max-w-[15rem] mx-auto ">
                    <h1 className="text-5xl max-md:text-3xl font-medium text-primary">Our Services Trip</h1>
                </div>
            </div>

            <div  className="trip h-auto mt-5 py-12 items-center">
                <Carousel />
            </div>
        </section>
    )
}