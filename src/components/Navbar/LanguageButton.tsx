"use client";
import React, { useCallback, useRef, useState } from 'react';
import useOutsideClick from '@/src/hook/useOutsideClick';
import { AngleDownIcon } from '../UI/Icon/Icon';

export default function LanguageButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("EN");

    // Ref for the button/icon that toggles the dropdown
    const toggleRef = useRef(null);

    // Prevents unnecessary re-renders when passed to the custom hook
    const closeLanguageDropdown = useCallback(() => {
        setIsOpen(false);
    }, []);

    // Custom hook to Close when clicking outside
    useOutsideClick(toggleRef, isOpen, closeLanguageDropdown);

    return (
        <div className="relative" ref={toggleRef}>
            <button onClick={() => setIsOpen(!isOpen)} type='button' aria-label='Button to change language' className='flex items-center justify-around border border-borderColor w-14 h-8 cursor-pointer'>
                {language}
                <AngleDownIcon width={16} height={16} className='mt-0.5' />
            </button>
            <div className={`bg-backgroundColor absolute left-0 right-0 top-full translate-y-1 ${isOpen ? "h-14 border border-borderColor" : "h-0"} overflow-hidden custom-duration`}>
                <ul className='space-y-1'>
                    <li onClick={() => setLanguage("EN")} className='bg-transparent hover:bg-gray-300 px-1 cursor-pointer custom-duration rounded'>EN</li>
                    <li onClick={() => setLanguage("AR")} className='bg-transparent hover:bg-gray-300 px-1 cursor-pointer custom-duration rounded'>AR</li>
                </ul>
            </div>
        </div>
    )
};