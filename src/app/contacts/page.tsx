import React from 'react';
import type { Metadata } from "next";
import SectionHeader from '@/src/components/SectionHeader/SectionHeader';

export const metadata: Metadata = {
    title: "Contacts | Eslam",
    description: "Get in touch with Eslam — open to freelance and collaboration.",
};

export default function page() {
    return (
        <div className="px-6 md:px-12 pt-6 md:pt-12 overflow-hidden space-y-24 font-mono text-textPrimaryColor">
            <SectionHeader title="contacts" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Left — description */}
                <div className='space-y-4'>
                    <p className="text-sm leading-relaxed">
                        I'm currently available for freelance projects, full-time roles, part-time opportunities, and remote collaborations in Front-End Development and Data Analysis. 
                    </p>
                    <p className="text-sm leading-relaxed">
                        If you have any questions, project ideas, or job opportunities, feel free to get in touch. I’m always open to discussing new challenges and exciting opportunities.
                    </p>
                    <p className="text-sm leading-relaxed">I’ll do my best to respond to all messages as soon as possible.</p>
                </div>
            </div>
        </div>
    )
}