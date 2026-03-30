"use client";
import Link from 'next/link';
import Image from "next/image";
import React from 'react';

export default function Navbar() {
    return (
        <header className='border-b border-white/10 font-mono"'>
            <nav className="max-w-300 h-16 mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className='flex items-center justify-center gap-2'>
                    <Image src="/personal-logo.webp" alt="Logo" width={32} height={32} loading='lazy' />
                    <span className="text-white font-semibold text-base">Eslam</span>
                </Link>

                <ul>

                </ul>
            </nav>
        </header>
    )
};