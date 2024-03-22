"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-black bg-opacity-90 w-full py-4 px-12 md:px-24 text-white fixed z-40">
            <div className="flex items-center justify-between">

                <Link href={'/'} className="flex text-end text-4xl items-center font-bold text-white -space-x-2">
                    <Image src={'/nuartha.png'} alt="" width={50} height={50} />
                    <span>nuartha</span>
                </Link>

                <nav className={`hidden md:flex gap-3 text-2xl tracking-tighter ${isMenuOpen ? 'flex' : 'hidden'}`}>
                    <Link href={'/about'} className='hover:text-primary ease-in duration-300'>About us</Link>
                    <Link href={'/service'} className='hover:text-primary ease-in duration-300'>Services</Link>
                    <Link href={'/team'} className='hover:text-primary ease-in duration-300'>Teams</Link>
                </nav>

                <button onClick={toggleMenu} aria-label='togle' id='togle' className='md:hidden'>
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-primary ease-in duration-300 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-primary rotate-90 ease-in duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>

            </div>
            {/* Menu for mobile */}
            <nav className={`md:hidden flex flex-col gap-3 text-2xl tracking-tighter pt-2 ${isMenuOpen ? 'flex' : 'hidden'} items-center pt-2`}>
                <Link href={'/about'} className='hover:text-primary ease-in duration-300'>About us</Link>
                <Link href={'/service'} className='hover:text-primary ease-in duration-300'>Services</Link>
                <Link href={'/team'} className='hover:text-primary ease-in duration-300'>Teams</Link>
            </nav>
        </header>



    );
};

export default Navbar;
