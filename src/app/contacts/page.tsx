import React from 'react';
import type { Metadata } from "next";
import SectionHeader from '@/src/components/SectionHeader/SectionHeader';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Contacts | Eslam",
    description: "Get in touch with Eslam — open to freelance and collaboration.",
};

const mediaLinks = [
    { label: "Email", value: "islam.gomaa.3rb@gmail.com", href: "mailto:islam.gomaa.3rb@gmail.com" },
    { label: "GitHub", value: "@Eslam-mg", href: "https://github.com/Eslam-mg" },
    { label: "LinkedIn", value: "islam-mg", href: "https://www.linkedin.com/in/islam-mg/" },
    { label: "Twitter", value: "@IslamMo_G", href: "https://x.com/IslamMo_G" },
];

export default function page() {
    return (
        <div className="px-6 md:px-12 pt-6 md:pt-12 overflow-hidden font-mono text-textPrimaryColor">
            <SectionHeader title="contacts" className='mb-8' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Left — description */}
                <div className='space-y-4 text-base leading-relaxed'>
                    <p>
                        I'm currently available for freelance projects, full-time roles, part-time opportunities, and remote collaborations in Front-End Development and Data Analysis.
                    </p>
                    <p>
                        If you have any questions, project ideas, or job opportunities, feel free to get in touch. I’m always open to discussing new challenges and exciting opportunities.
                    </p>
                    <p>I’ll do my best to respond to all messages as soon as possible.</p>
                </div>

                {/* Right — media box */}
                <div className="border border-borderColor p-7">
                    <SectionHeader title="all-media" className="mb-5" />
                    <div className="flex flex-col gap-3.5">
                        {mediaLinks.map((item) => (
                            <div key={item.label} className="flex gap-3 text-sm">
                                <span className="text-textPrimaryColor/50 min-w-17.5">
                                    {item.label}:
                                </span>
                                <Link
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={
                                        item.href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="text-textPrimaryColor hover:opacity-80 transition-opacity"
                                >
                                    {item.value}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}