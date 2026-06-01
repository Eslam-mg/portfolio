import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
    title: "Eslam Mohamed | Portfolio",
    description:
        "Portfolio of Eslam Mohamed, showcasing Front-End Development and Data Analysis projects built with React, Next.js, Power BI, SQL, and Excel.",
};

export default function page() {
    return (
        <div className="font-mono text-gray-text px-6 md:px-12 pt-6 md:pt-12 overflow-hidden space-y-24">
            {/* ── HERO ── */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative">
                {/* Text side */}
                <div className="relative z-10">
                    <h1 className="text-white text-4xl font-semibold leading-snug m-0 mb-4">
                        Eslam is a{" "}
                        <span className="text-primaryColor">web designer</span>{" "}
                        and{" "}
                        <span className="text-primaryColor">data analyst</span>
                    </h1>
                    <p className="text-textPrimaryColor text-[15px] leading-7 m-0 mb-8 max-w-md">
                        Combining modern web development with data-driven analysis to create engaging digital experiences and actionable insights.
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
            <section className="mt-8">
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

                    <div className="grid lg:grid-rows-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="border border-borderColor">
                            <div className="border-b border-borderColor text-sm text-white font-bold p-0.5">
                                Languages
                            </div>
                            <div className="text-textPrimaryColor flex flex-row flex-wrap gap-2 text-sm p-0.5">
                                <span>TypeScript -</span>
                                <span>Python -</span>
                                <span>JavaScript</span>
                            </div>
                        </div>

                        <div className="border border-borderColor">
                            <div className="border-b border-borderColor text-sm text-white font-bold p-0.5">
                                Databases
                            </div>
                            <div className="text-textPrimaryColor flex flex-row flex-wrap gap-2 text-sm p-0.5">
                                <span>SQLite -</span>
                                <span>SQL -</span>
                                <span>MySQL</span>
                            </div>
                        </div>

                        <div className="border border-borderColor">
                            <div className="border-b border-borderColor text-sm text-white font-bold p-0.5">
                                Other
                            </div>
                            <div className="text-textPrimaryColor flex flex-row flex-wrap gap-2 text-sm p-0.5">
                                <span>HTML -</span>
                                <span>CSS -</span>
                                <span>SCSS -</span>
                                <span>tailwindcss</span>
                            </div>
                        </div>

                        <div className="border border-borderColor lg:row-start-2 lg:col-start-2">
                            <div className="border-b border-borderColor text-sm text-white font-bold p-0.5">
                                Data Analysis
                            </div>
                            <div className="text-textPrimaryColor flex flex-row flex-wrap gap-2 text-sm p-0.5">
                                <span>EXCEL -</span>
                                <span>Power BI -</span>
                                <span>Tableau</span>
                            </div>
                        </div>

                        <div className="border border-borderColor lg:col-start-3">
                            <div className="border-b border-borderColor text-sm text-white font-bold p-0.5">
                                Frameworks
                            </div>
                            <div className="text-textPrimaryColor flex flex-row flex-wrap gap-2 text-sm p-0.5">
                                <span>React -</span>
                                <span>Next -</span>
                                <span>Vue</span>
                            </div>
                        </div>

                        <div className="border border-borderColor lg:row-start-3 lg:col-start-3">
                            <div className="border-b border-borderColor text-sm text-white font-bold p-0.5">
                                Tools
                            </div>
                            <div className="text-textPrimaryColor flex flex-row flex-wrap gap-2 text-sm p-0.5">
                                <span>VSCode -</span>
                                <span>Git -</span>
                                <span>Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ABOUT ME PREVIEW ── */}
            <section className="">
                <SectionHeader title="about-me" className="mb-7" showLine={true} lineWidth="w-0 sm:w-52 md:w-72 lg:w-96" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className='text-textPrimaryColor'>
                        <p className="text-sm leading-relaxed mb-3">
                            Hello, I&apos;m Eslam! I&apos;m a self-taught front-end developer
                            based in Egypt. I can develop responsive websites from scratch
                            and raise them into modern user-friendly web experiences.
                        </p>
                        <p className="text-sm leading-relaxed mb-6">
                            Transforming my creativity and knowledge into websites has been my
                            passion for over a year.
                        </p>
                        <Link
                            href="/about-me"
                            className="border border-primaryColor text-white px-4 py-2 text-xs hover:bg-primaryColor/20 transition-colors inline-block"
                        >
                            Read more →
                        </Link>
                    </div>

                    {/* Profile card */}
                    <div className="border border-borderColor p-6 flex flex-col items-center gap-4">
                        <div className="w-24 h-24 rounded-full flex items-center justify-center">
                            <svg width="50" height="60" viewBox="0 0 50 60" fill="none">
                                <circle cx="25" cy="18" r="14" fill="#abb2bf33" />
                                <ellipse cx="25" cy="52" rx="22" ry="16" fill="#abb2bf33" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <p className="text-white m-0 mb-1 font-semibold">Eslam</p>
                            <p className="text-textPrimaryColor m-0 text-xs">Frontend Developer & Data Analyst</p>
                        </div>
                        <div className="w-full border-t border-borderColor pt-4 flex flex-col gap-2">
                            {["Friendly", "Ambitious", "Immovable", "Focused"].map((trait) => (
                                <div key={trait} className="flex items-center gap-2 text-xs">
                                    <span className="text-primaryColor">✓</span>
                                    <span className="text-textPrimaryColor">{trait}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONTACTS CTA ── */}
            <section className="">
                <SectionHeader title="contacts" className="mb-6" showLine={true} lineWidth="w-0 sm:w-44 md:w-52 lg:w-72" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <p className="text-sm leading-relaxed text-textPrimaryColor">
                        I&apos;m interested in freelance opportunities. However, if you
                        have other requests or questions, don&apos;t hesitate to contact me.
                    </p>
                    <div className="border border-borderColor p-6">
                        <p className="text-white font-semibold text-sm mb-3">
                            <span className="text-primaryColor"># </span>media
                        </p>
                        <div className="flex flex-col gap-2">
                            {[
                                { label: "GitHub", value: "Eslam-mg", href: "https://github.com/Eslam-mg" },
                                { label: "LinkedIn", value: "islam-mg", href: "https://www.linkedin.com/in/islam-mg/" },
                                { label: "Email", value: "islam.gomaa.3rb@gmail.com", href: "https://islam.gomaa.3rb@gmail.com" },
                            ].map((item) => (
                                <div key={item.label} className="flex gap-2 text-xs">
                                    <a href={item.href} target='_blank' className="text-textPrimaryColor/50">{item.label}:</a>
                                    <a href={item.href} target='_blank' className="text-textPrimaryColor">{item.value}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};