"use client";
import Link from 'next/link';
import Image from "next/image";
import React from 'react';

export default function Navbar() {
    return (
        <header>
            <nav>
                {/* Logo */}
                <Link href="/">
                    <Image src="/personal-logo.webp" alt="Logo" width={32} height={32} loading='lazy' />
                    <span className=''>
                        Eslam
                    </span>
                </Link>
                <ul>

                </ul>
            </nav>
        </header>
    )
};