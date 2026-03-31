"use client";
import React, { useState } from 'react';

export default function LanguageButton() {
    const [state, setstate] = useState();

    return (
        <button type='button' aria-label='Button to change language' className='border border-gray-300 rounded w-14 h-8 cursor-pointer'>
            EN
        </button>
    )
};