import React from 'react'
import Image from "next/image";
import type { Metadata } from "next";
import SectionHeader from '@/src/components/SectionHeader/SectionHeader';
export const metadata: Metadata = {
    title: "About Me | Eslam",
    description:
        "Learn more about Eslam — Junior Front-End Developer skilled in React and Next.js, with knowledge of Excel, SQL, and Power BI for data analysis.",
};

const skillGroups = [
    { title: "Languages", skills: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"] },
    { title: "Frameworks", skills: ["React", "Next.js", "Node.js", "Express"] },
    { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"] },
    { title: "Databases", skills: ["MongoDB", "PostgreSQL", "Firebase"] },
    { title: "Other", skills: ["REST APIs", "SEO", "Accessibility", "Performance"] },
];

export default function page() {
    return (
        <div className="font-mono text-textPrimaryColor px-6 md:px-12 pt-6 md:pt-12 overflow-hidden space-y-24">
            {/* Bio + profile card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
                <div>
                    <SectionHeader title="about-me" />
                    <p className="text-sm leading-relaxed mb-4">
                        Hello, I'm Eslam! I'm a self-taught front-end developer
                        based in Egypt. I can develop responsive websites from scratch
                        and raise them into modern user-friendly web experiences.
                    </p>
                    <p className="text-sm leading-relaxed mb-4">
                        I work with React, Next.js, and TypeScript to create clean,
                        user-friendly interfaces and smooth digital experiences.
                        I also have knowledge of data analysis using Excel, SQL, and Power BI.
                    </p>
                    <p className="text-sm leading-relaxed">
                        I’m always eager to learn new technologies and take on new challenges to improve my skills and grow as a developer.
                    </p>
                </div>

                {/* Avatar card */}
                <div className="border border-white/20 p-8 flex flex-col items-center gap-5">
                    <div className="w-32 h-32 rounded-full bg-bg flex items-center justify-center border-2 border-borderColor overflow-hidden">
                        <Image src="/myPhoto.jpg" alt='my image' width={190} height={180}/>
                    </div>
                    <div className="text-center">
                        <p className="text-white m-0 mb-1 font-semibold text-base">Eslam</p>
                        <p className="text-gray-text m-0 text-xs">Frontend Developer & Data Analysit</p>
                    </div>
                    <div className="w-full border-t border-white/10 pt-4 flex flex-col gap-2.5">
                        {["Friendly", "Ambitious", "Immovable", "Focused"].map((t) => (
                            <div key={t} className="flex items-center gap-2.5 text-[13px]">
                                <span className="text-primary text-base">✓</span>
                                <span>{t}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
                <SectionHeader title="skills" showLine={true} lineWidth="w-0 sm:w-44 md:w-52 lg:w-72" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
                    {skillGroups.map((group) => (
                        <div key={group.title} className="border border-borderColor p-5">
                            <h3 className="text-white m-0 mb-3.5 text-sm font-semibold border-b border-borderColor pb-2.5">
                                {group.title}
                            </h3>
                            <ul className="list-none m-0 p-0">
                                {group.skills.map((skill) => (
                                    <li key={skill} className="text-textPrimaryColor text-xs py-1 flex items-center gap-1.5">
                                        <span className="text-primary text-[10px]">▸</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};