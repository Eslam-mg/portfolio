import React from 'react';
import Link from 'next/link';

export default function page() {
    return (
        <div className="font-mono text-gray-text px-6">
            {/* ── HERO ── */}
            <section className=" px-6 pt-20 pb-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative">
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
            </section>
        </div>
    )
};