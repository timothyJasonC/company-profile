import React from "react";
const Hero: React.FC = () => {
    return (
        <section className="hero z-10 sm:pt-20">
            <div className="wrapper">
                    <div className="w-full bg-white bg-opacity-70 items-center mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-2 pt-12 pb-6 px-16 max-sm:px-0">
                        <div className="p-2 sm:p-4  max-sm:text-center">
                            <h1 className="text-2xl sm:text-5xl font-medium text-primary ">ABOUT US</h1>
                            <p className="text-xs md:text-sm sm:mt-4 text-start tracking-[.1rem] md:leading-[2rem] max-sm:text-center">Nuartha Tours and Travel formed in 2015 with a vision to excel in Indonesian tourism through quality service and innovative technology.</p>
                        </div>
                        <div className="flex justify-center z-10">
                            <iframe width="743" height="418" className="max-sm:w-64 max-sm:h-32" src="https://www.youtube.com/embed/BPj-5RM4U5w" title="Company Profile Nuartha Tours and Travel"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Hero;
