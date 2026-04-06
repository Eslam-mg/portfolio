import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { OpeningQuoteIcon } from '@/src/components/UI/Icon/Icon';
import SectionHeader from '@/src/components/SectionHeader/SectionHeader';

export default function page() {
    return (
        <div className="font-mono text-gray-text px-6 overflow-hidden">
            {/* ── HERO ── */}
            <section className="px-6 pt-20 pb-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative">
                {/* Text side */}
                <div className="relative z-10">
                    <h1 className="text-white text-4xl font-semibold leading-snug m-0 mb-4">
                        Eslam is a{" "}
                        <span className="text-primaryColor">web designer</span>{" "}
                        and{" "}
                        <span className="text-primaryColor">front-end developer</span>
                    </h1>
                    <p className="text-textPrimaryColor text-[15px] leading-7 m-0 mb-8 max-w-md">
                        He crafts responsive websites where technologies meet creativity.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Link
                            href="/contacts"
                            className="border border-primary text-white px-5 py-2.5 text-sm hover:bg-primary/10 transition-colors"
                        >
                            Contact me!!
                        </Link>
                        <Link
                            href="/projects"
                            className="border border-white/20 text-gray-text px-5 py-2.5 text-sm hover:border-white/40 transition-colors"
                        >
                            See my works →
                        </Link>
                    </div>
                </div>

                {/* Profile image side */}
                <div className="relative flex justify-end">
                    {/* Geometric outline offset box */}
                    <div className="absolute -bottom-4 -right-2 w-65 h-80 border-2 border-primary z-0" />
                    {/* Profile box */}
                    <div className="w-65 h-80 bg-bg-card relative z-10 flex items-center justify-center overflow-hidden">
                        <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
                            <circle cx="60" cy="45" r="30" fill="#abb2bf22" />
                            <ellipse cx="60" cy="130" rx="50" ry="40" fill="#abb2bf22" />
                        </svg>
                    </div>

                    {/* Bottom-right dots */}
                    <Image
                        src="/Dots.svg"
                        alt=""
                        width={84}
                        height={84}
                        aria-hidden
                        className="absolute -bottom-15 -right-5 opacity-40 pointer-events-none"
                    />
                </div>
            </section>

            {/* Quote section */}
            <section className='relative border-red-500 flex items-center justify-center'>
                <div className="relative border border-borderColor p-4 max-w-96">
                    <OpeningQuoteIcon className='flex items-center justify-center w-6 h-6 bg-backgroundColor absolute top-0 -translate-y-1/2 left-2 z-10 text-borderColor' />
                    <p className="text-white text-xs m-0 leading-relaxed italic">
                        &ldquo;With great power comes great electricity bill&rdquo;
                    </p>
                    <div className="absolute top-full -right-px border border-t-0 border-borderColor p-2">
                        <span className='text-white'>- Dr. Who</span>
                    </div>
                    <OpeningQuoteIcon className='flex items-center justify-center w-6 h-6 bg-backgroundColor absolute bottom-0 translate-y-1/2 right-2 z-10 rotate-180 text-borderColor' />
                </div>

                {/* right Rectangle 24 */}
                <Image
                    src="/Rectangle 24.svg"
                    alt=""
                    width={91}
                    height={91}
                    aria-hidden
                    className="absolute top-1/2 -translate-y-1/2 -right-7 opacity-40 pointer-events-none"
                />
            </section>

            {/* ── PROJECTS PREVIEW ── */}
            <section className="mt-32">
                <SectionHeader title="projects" className="mb-0" showLine={true} />
            </section>
        </div>
    )
};