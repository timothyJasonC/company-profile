'use client'
import { useEffect, useState } from "react";
import { getUser } from "../lib/user";

export default function Page() {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const users = await getUser();
            setUser(users);
            setLoading(false);
        };

        fetchData();

    }, []);


    const SkeletonUserCard = () => (
        <div className="w-[20rem] max-sm:w-[400px] border-4 border-primary rounded-3xl py-4 px-2 flex flex-col max-sm:flex-row  max-md:justify-center max-md:px-6 items-center text-white bg-gray-600">
            <div className="avatar mb-2">
                <div className="w-24 max-sm:w-20 rounded-full skeleton"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-bold skeleton h-4 w-32 mb-2"></p>
                <p className="textarea-md skeleton h-2 w-48 mb-2"></p>
                <p className="h-2 w-32 skeleton"></p>
            </div>
        </div>
    );
    return (
        <div className="pt-[6rem] pb-12 bg-white text-black w-full min-w-[375px] px-4">
            <p className="text-center text-5xl text-primary font-bold">Meet Our Team</p>
            <div className="flex flex-wrap items-center justify-center  container2 gap-4 my-12 px-4">
                {loading ? (
                    <>
                        <SkeletonUserCard />
                        <SkeletonUserCard />
                        <SkeletonUserCard />
                        <SkeletonUserCard />
                        <SkeletonUserCard />
                        <SkeletonUserCard />
                        <SkeletonUserCard />
                        <SkeletonUserCard />
                        <SkeletonUserCard />
                        <SkeletonUserCard />
                    </>
                ) : (
                    user.map((user: any, index) => (
                        <div key={index} className="w-[20rem] max-sm:w-[400px] border-4 border-primary shadow-lg shadow-orange-700/50 rounded-3xl py-4 px-2 flex flex-col max-sm:flex-row  max-sm:justify-center max-sm:gap-12 max-md:px-6 items-center text-white bg-gray-600">
                            <div className="avatar mb-2">
                                <div className="w-24 max-sm:w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user.picture.medium} alt="user-avatar" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl max-sm:text-base font-bold">
                                    {user.name.first} {user.name.last}
                                </p>
                                <p className="max-sm:text-[.7rem]">{user.email}</p>
                                <p>{user.phone}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}