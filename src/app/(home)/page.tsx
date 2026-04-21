import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { AngleDownIcon, GripBoxIcon, LogoIcon, OpeningQuoteIcon, SquareIcon } from '@/src/components/UI/Icon/Icon';
import SectionHeader from '@/src/components/SectionHeader/SectionHeader';
import ProjectCard from '@/src/components/ProjectCard/ProjectCard';
const featuredProjects = [
    {
        title: "FakeStore App",
        description:
            "A full-featured e-commerce front-end with cart, authentication, and product filtering. Built with Next.js and Tailwind CSS.",
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Portfolio V1",
        description:
            "Personal portfolio site built with React showcasing projects and skills. Fully responsive and animated.",
        technologies: ["React", "CSS"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Weather Dashboard",
        description:
            "Real-time weather app using OpenWeather API with animated weather icons and geolocation support.",
        technologies: ["JavaScript", "API"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

export default function page() {
    return (
        <div className="font-mono text-gray-text px-6 md:px-12 pt-6 md:pt-12 overflow-hidden space-y-32">
            {/* ── HERO ── */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative">
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
                    <GripBoxIcon className="absolute -bottom-15 -right-5 opacity-40 pointer-events-none" width={84} height={84} />
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

                {/* right Rectangle */}
                <SquareIcon className="hidden sm:block absolute top-1/2 -translate-y-1/2 -right-14 pointer-events-none" width={91} height={81} />
            </section>

            {/* ── PROJECTS PREVIEW ── */}
            <section className="">
                <div className="flex items-center justify-between">
                    <SectionHeader title="projects" className="mb-0" showLine={true} lineWidth="w-0 sm:w-52 md:w-72 lg:w-96" />
                    <Link href="/" className='text-textPrimaryColor'>View all ~~&gt;</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </section>

            {/* ── SKILLS PREVIEW ── */}
            <section className="">
                <SectionHeader title="skills" className="mb-0" showLine={true} lineWidth="w-0 sm:w-44 md:w-52 lg:w-72" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
                    <div className="relative hidden sm:block">
                        <GripBoxIcon className='flex w-96 h-96 absolute top-5 left-4' />
                        <SquareIcon className='absolute top-0 left-1/2 translate-x-8' width={76} height={76} />
                        <LogoIcon className='absolute bottom-4 left-10' />
                        <GripBoxIcon className='absolute top-1/2 left-1/2' />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="border border-borderColor">
                            <div className="border-b border-borderColor text-sm text-white font-bold p-0.5">
                                Languages
                            </div>
                            <div className="text-textPrimaryColor flex flex-row flex-wrap gap-2 text-sm p-0.5">
                                <span>TypeScript</span>
                                <span>Python</span>
                                <span>JavaScript</span>
                            </div>
                        </div>

                        <div className="border border-borderColor">
                            <div className="border-b border-borderColor text-sm text-white font-bold p-0.5">
                                Databases
                            </div>
                            <div className="text-textPrimaryColor flex flex-row flex-wrap gap-2 text-sm p-0.5">
                                <span>SQLite</span>
                                <span>SQL</span>
                                <span>MySQL</span>
                            </div>
                        </div>

                        <div className="border border-borderColor">
                            <div className="border-b border-borderColor text-sm text-white font-bold p-0.5">
                                Data Analysis
                            </div>
                            <div className="text-textPrimaryColor flex flex-row flex-wrap gap-2 text-sm p-0.5">
                                <span>EXCEL -</span>
                                <span>Power BI -</span>
                                <span>Tableau</span>
                            </div>
                        </div>

                        <div className="border border-borderColor">
                            <div className="border-b border-borderColor text-sm text-white font-bold p-0.5">
                                Other
                            </div>
                            <div className="text-textPrimaryColor flex flex-row flex-wrap gap-2 text-sm p-0.5">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>SCSS</span>
                                <span>tailwindcss</span>
                            </div>
                        </div>

                        <div className="border border-borderColor">
                            <div className="border-b border-borderColor text-sm text-white font-bold p-0.5">
                                Tools
                            </div>
                            <div className="text-textPrimaryColor flex flex-row flex-wrap gap-2 text-sm p-0.5">
                                <span>VSCode</span>
                                <span>Git</span>
                                <span>Figma</span>
                            </div>
                        </div>

                        <div className="border border-borderColor">
                            <div className="border-b border-borderColor text-sm text-white font-bold p-0.5">
                                Frameworks
                            </div>
                            <div className="text-textPrimaryColor flex flex-row flex-wrap gap-2 text-sm p-0.5">
                                <span>React</span>
                                <span>Next</span>
                                <span>Vue</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};