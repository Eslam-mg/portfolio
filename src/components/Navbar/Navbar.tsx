"use client";
import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: "/", label: "home" },
    { href: "/projects", label: "works" },
    { href: "/about-me", label: "about-me" },
    { href: "/contacts", label: "contacts" },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className='border-b border-white/10 font-mono"'>
            <nav className="max-w-300 h-16 mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className='flex items-center justify-center gap-2'>
                    <Image src="/personal-logo.webp" alt="Logo" width={32} height={32} loading='lazy' />
                    <span className="text-white font-semibold text-base">Eslam</span>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden sm:flex list-none gap-8 m-0 p-0">
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
            </nav>
        </header>
    )
};