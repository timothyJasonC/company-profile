export default function Footer() {
    return (
        <footer className="bg-black min-w-[500px] text-white py-12">
            <div className="flex pl-32 gap-24 max-md:pl-12">
                <div className="">
                    <p className="text-2xl max-md:text-xl font-bold mb-2">Company</p>
                    <div className="flex flex-col text-lg max-md:text-sm">
                        <a href="">About us</a>
                        <a href="">Contacts</a>
                        <a href="">Travel blogs</a>
                        <a href="">Privacy policy</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl max-md:text-xl font-bold mb-2">Social media</p>
                    <div className="flex flex-col text-lg max-md:text-sm">
                        <a href="">Twitter</a>
                        <a href="">Instagram</a>
                        <a href="">Facebook</a>
                    </div>
                </div>
            </div>
            <p className="text-end max-md:text-sm pr-12 max-md:mt-4 max-md:text-start max-md:ml-12 ">&copy; Copyright 2024, NuarthaTravel All right reserve</p>

        </footer>
    )
}