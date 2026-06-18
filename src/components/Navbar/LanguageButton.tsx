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
            <button onClick={() => setIsOpen(!isOpen)} type='button' aria-label='Button to change language' className='flex items-center justify-around text-textPrimaryColor border border-borderColor w-14 h-8 cursor-pointer'>
                {language}
                <AngleDownIcon width={16} height={16} className='mt-0.5' />
            </button>
            <div className={`bg-backgroundColor absolute left-0 right-0 top-full translate-y-1 ${isOpen ? "h-14 border border-borderColor" : "h-0"} overflow-hidden custom-duration`}>
                <ul className='space-y-1'>
                    <li onClick={() => {setLanguage("EN"); setIsOpen(false)}} className={`${language === "EN" ? "text-white bg-primaryColor/10 border-l-2 border-primaryColor": "text-textPrimaryColor hover:bg-white/5 hover:text-white border-l-2 border-transparent" } px-1 cursor-pointer custom-duration`}>EN</li>
                    <li onClick={() => {setLanguage("AR"); setIsOpen(false)}} className={`${language === "AR" ? "text-white bg-primaryColor/10 border-l-2 border-primaryColor": "text-textPrimaryColor hover:bg-white/5 hover:text-white border-l-2 border-transparent" } px-1 cursor-pointer custom-duration`}>AR</li>
                </ul>
            </div>
        </div>
    )
};