"use client";
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <header>
            <nav>
                {/* Logo */}
                <Link href="/">
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