"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const navlinks = [
    { name: 'About', path: '#about' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Stack', path: '#stack' },
    { name: 'Contact', path: '#contact' }
];

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className="z-50 fixed w-full text-white font-bold">
            {/* Desktop Navbar */}
            <div className='border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex justify-center p-2 max-w-[400px] mx-auto'>
                <ul className='flex flex-row p-2 space-x-8'>
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} className='transform hover:text-white/50 transition-all duration-300 ease-in-out'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Mobile Menu Icon */}
            <div onClick={toggleNav} className='md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Menu */}
            <div className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className='flex flex-col justify-center h-full space-y-8'>
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav} className='text-5xl'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
