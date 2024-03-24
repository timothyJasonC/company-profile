import Image from "next/image";

export default function Page() {
    return (
        <div className="pt-[6rem] pb-12 bg-white w-full px-4 min-w-[375px]">
            <p className="text-center text-5xl text-primary font-bold">Our Services</p>
            <div className="w-[80%] mx-auto pt-12 flex flex-col gap-8 justify-center">

                <div className="card lg:card-side bg-base-100 shadow-xl flex">
                    <figure><Image src={'/family.jpg'} width={600} height={400} className="w-full h-full" alt="Album" /></figure>
                    <div className="card-body">
                        <p className="card-title">Familiy Trip</p>
                        <p>Experience the joy of family adventures with our Family Trip package. Book now for unforgettable memories!</p>
                        <div className="card-actions justify-start">
                            <div className="dropdown">
                                <button tabIndex={0} role="button" className="btn btn-primary text-white w-28">See Details</button>
                                <div tabIndex={0} className="dropdown-content z-[1] card flex justify-center items-center card-compact w-[48rem] max-md:w-[25rem] p-2 shadow bg-primary text-primary-content">
                                    <div className="card-body text-white">
                                        <h3 className="card-title">Lorem</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse veniam adipisci laboriosam sint quo nostrum doloribus qui beatae ullam aliquid ducimus magni eligendi enim, similique tenetur magnam veritatis, non odit eaque amet eum harum nemo. Ratione similique quis cum est perspiciatis laborum accusamus. Adipisci saepe magnam in repellendus enim magni, amet aspernatur, veritatis expedita ratione nisi, quas necessitatibus ullam aut aliquam fuga illum earum alias deleniti excepturi doloremque eum!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl flex">
                    <figure><Image src={'/group.jpg'} width={600} height={400} alt="Album" className="w-full h-full" /></figure>
                    <div className="card-body">
                        <p className="card-title">Group Vacation</p>
                        <p>Experience the joy of family adventures with our Family Trip package. Book now for unforgettable memories!</p>
                        <div className="card-actions justify-start">
                            <div className="dropdown">
                                <button tabIndex={0} role="button" className="btn btn-primary text-white w-28">See Details</button>
                                <div tabIndex={0} className="dropdown-content z-[1] card flex justify-center items-center card-compact w-[48rem] max-md:w-[25rem] p-2 shadow bg-primary text-primary-content">
                                    <div className="card-body text-white">
                                        <h3 className="card-title">Lorem</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse veniam adipisci laboriosam sint quo nostrum doloribus qui beatae ullam aliquid ducimus magni eligendi enim, similique tenetur magnam veritatis, non odit eaque amet eum harum nemo. Ratione similique quis cum est perspiciatis laborum accusamus. Adipisci saepe magnam in repellendus enim magni, amet aspernatur, veritatis expedita ratione nisi, quas necessitatibus ullam aut aliquam fuga illum earum alias deleniti excepturi doloremque eum!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl flex">
                    <figure><Image src={'/outbond.jpg'} width={600} height={400} alt="Album" className="w-full h-full" /></figure>
                    <div className="card-body">
                        <p className="card-title">Outbond</p>
                        <p>Embark on thrilling outdoor escapades with our Outbond Area package. Adventure awaits—reserve your experience now!</p>
                        <div className="card-actions justify-start">
                            <div className="dropdown">
                                <button tabIndex={0} role="button" className="btn btn-primary text-white w-28">See Details</button>
                                <div tabIndex={0} className="dropdown-content z-[1] card flex justify-center items-center card-compact w-[48rem] max-md:w-[25rem] p-2 shadow bg-primary text-primary-content">
                                    <div className="card-body text-white">
                                        <h3 className="card-title">Lorem</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse veniam adipisci laboriosam sint quo nostrum doloribus qui beatae ullam aliquid ducimus magni eligendi enim, similique tenetur magnam veritatis, non odit eaque amet eum harum nemo. Ratione similique quis cum est perspiciatis laborum accusamus. Adipisci saepe magnam in repellendus enim magni, amet aspernatur, veritatis expedita ratione nisi, quas necessitatibus ullam aut aliquam fuga illum earum alias deleniti excepturi doloremque eum!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl flex">
                    <figure><Image src={'/toyota.jpg'} width={600} height={400} alt="Album" className="w-full h-full" /></figure>
                    <div className="card-body">
                        <p className="card-title">Car</p>
                        <p>Discover the convenience of traveling with our Toyota car rental service on your favorite travel website. Book now for an unforgettable travel experience!</p>
                        <div className="card-actions justify-start">
                            <div className="dropdown">
                                <button tabIndex={0} role="button" className="btn btn-primary text-white w-28">See Details</button>
                                <div tabIndex={0} className="dropdown-content z-[1] card flex justify-center items-center card-compact w-[48rem] max-md:w-[25rem] p-2 shadow bg-primary text-primary-content">
                                    <div className="card-body text-white">
                                        <h3 className="card-title">Lorem</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse veniam adipisci laboriosam sint quo nostrum doloribus qui beatae ullam aliquid ducimus magni eligendi enim, similique tenetur magnam veritatis, non odit eaque amet eum harum nemo. Ratione similique quis cum est perspiciatis laborum accusamus. Adipisci saepe magnam in repellendus enim magni, amet aspernatur, veritatis expedita ratione nisi, quas necessitatibus ullam aut aliquam fuga illum earum alias deleniti excepturi doloremque eum!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl flex">
                    <figure><Image src={'/hiace.jpg'} width={600} height={400} alt="Album" className="w-full h-full" /></figure>
                    <div className="card-body">
                        <p className="card-title">Elf & Hiace</p>
                        <p>Explore the convenience of renting our spacious Elf or Hiace vans for your group travel needs. Book now for a comfortable and hassle-free journey!</p>
                        <div className="card-actions justify-start">
                            <div className="dropdown">
                                <button tabIndex={0} role="button" className="btn btn-primary text-white w-28">See Details</button>
                                <div tabIndex={0} className="dropdown-content z-[1] card flex justify-center items-center card-compact w-[48rem] max-md:w-[25rem] p-2 shadow bg-primary text-primary-content">
                                    <div className="card-body text-white">
                                        <h3 className="card-title">Lorem</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse veniam adipisci laboriosam sint quo nostrum doloribus qui beatae ullam aliquid ducimus magni eligendi enim, similique tenetur magnam veritatis, non odit eaque amet eum harum nemo. Ratione similique quis cum est perspiciatis laborum accusamus. Adipisci saepe magnam in repellendus enim magni, amet aspernatur, veritatis expedita ratione nisi, quas necessitatibus ullam aut aliquam fuga illum earum alias deleniti excepturi doloremque eum!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}   