"use client";
import React, { useState } from 'react';
import { AngleDownIcon } from '../UI/Icon/Icon';

export default function LanguageButton() {
    const [state, setstate] = useState();

    return (
        <div className="relative">
            <button type='button' aria-label='Button to change language' className='flex items-center justify-around border border-gray-300 rounded w-14 h-8 cursor-pointer'>
                EN
                <AngleDownIcon width={16} height={16} className='mt-0.5' />
            </button>
            <div className="bg-gray-400 rounded border border-gray-400 absolute left-0 right-0 top-full translate-y-1">
                <ul className='space-y-1'>
                    <li className='bg-transparent hover:bg-gray-300 px-1 cursor-pointer transition-colors ease-in-out duration-300 rounded'>EN</li>
                    <li className='bg-transparent hover:bg-gray-300 px-1 cursor-pointer transition-colors ease-in-out duration-300 rounded'>AR</li>
                </ul>
            </div>
        </div>
    )
};