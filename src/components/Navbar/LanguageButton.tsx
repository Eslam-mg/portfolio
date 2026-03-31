"use client";
import React, { useState } from 'react';
import { AngleDownIcon } from '../UI/Icon/Icon';

export default function LanguageButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} type='button' aria-label='Button to change language' className='flex items-center justify-around border border-borderColor rounded w-14 h-8 cursor-pointer'>
                EN
                <AngleDownIcon width={16} height={16} className='mt-0.5' />
            </button>
            <div className={`bg-gray-400 rounded absolute left-0 right-0 top-full translate-y-1 ${isOpen ? "h-14" : "h-0"} overflow-hidden transition-all ease-in-out duration-300`}>
                <ul className='space-y-1'>
                    <li className='bg-transparent hover:bg-gray-300 px-1 cursor-pointer transition-colors ease-in-out duration-300 rounded'>EN</li>
                    <li className='bg-transparent hover:bg-gray-300 px-1 cursor-pointer transition-colors ease-in-out duration-300 rounded'>AR</li>
                </ul>
            </div>
        </div>
    )
};