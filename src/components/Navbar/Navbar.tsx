"use client";
import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import LanguageButton from './LanguageButton';

const navLinks = [
    { href: "/", label: "home" },
    { href: "/projects", label: "works" },
    { href: "/about-me", label: "about-me" },
    { href: "/contacts", label: "contacts" },
];

export default function Navbar() {
    const pathname = usePathname();
    // Controls the visibility of the mobile/navigation menu
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="border-b border-borderColor">
            <nav className="max-w-300 h-16 mx-auto px-6 flex items-center justify-between relative">
                {/* Logo */}
                <Link href="/" className='flex items-center justify-center gap-2'>
                    <Image src="/personal-logo.webp" alt="Logo" width={32} height={32} loading='lazy' />
                    <span className="text-white font-semibold text-base">Eslam</span>
                </Link>

                {/* responsive nav */}
                <ul className={`flex flex-col sm:flex-row gap-8 m-0 p-0 absolute sm:static top-full ${isOpen ? "h-96" : "h-0"} sm:h-fit overflow-hidden custom-duration`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-sm transition-colors flex items-center gap-0.5 ${pathname === link.href ? "text-white" : "text-textPrimaryColor"}`}
                            >
                                <span className="text-primaryColor">#</span>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className=" flex items-center justify-center gap-4">
                    <LanguageButton />
                    <button type='button' onClick={() => setIsOpen(!isOpen)} aria-label='Button to open mobile menu' className="flex flex-col items-end justify-center gap-1.5 sm:hidden cursor-pointer">
                        <span className={`bg-textPrimaryColor h-0.5 w-6 ${isOpen ? "translate-y-1 translate-x-0 -rotate-45" : ""} custom-duration`} />
                        <span className={`bg-textPrimaryColor h-0.5 ${isOpen ? "-translate-y-1 translate-x-0 rotate-45 w-6" : "w-4"} custom-duration`} />
                    </button>
                </div>
            </nav>
        </header>
    )
};