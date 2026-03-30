"use client";
import Link from 'next/link';
import React from 'react';
import { LogoIcon } from '../UI/Icon/Icon';

export default function Navbar() {
    return (
        <header>
            <nav>
                {/* Logo */}
                <Link href="/">
                    <LogoIcon className='w-11 h-11 flex'/>
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