"use client";
import React, { useRef, useState } from 'react';
import { AngleDownIcon } from '../UI/Icon/Icon';

export default function LanguageButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("EN");

    // Ref for the button/icon that toggles the dropdown
    const toggleRef = useRef(null);

    return (
        <div className="relative" ref={toggleRef}>
            <button onClick={() => setIsOpen(!isOpen)} type='button' aria-label='Button to change language' className='flex items-center justify-around border border-borderColor rounded w-14 h-8 cursor-pointer'>
                {language}
                <AngleDownIcon width={16} height={16} className='mt-0.5' />
            </button>
            <div className={`bg-gray-400 rounded absolute left-0 right-0 top-full translate-y-1 ${isOpen ? "h-14" : "h-0"} overflow-hidden custom-duration`}>
                <ul className='space-y-1'>
                    <li onClick={() => setLanguage("EN")} className='bg-transparent hover:bg-gray-300 px-1 cursor-pointer custom-duration rounded'>EN</li>
                    <li onClick={() => setLanguage("AR")} className='bg-transparent hover:bg-gray-300 px-1 cursor-pointer custom-duration rounded'>AR</li>
                </ul>
            </div>
        </div>
    )
};