"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectType, myProjects } from '../Projects_List';

export default function ProjectDetailClient({ project }: { project: ProjectType }) {
    const [activeImage, setActiveImage] = useState(0);
    return (
        <div className="text-textPrimaryColor px-6 sm:px-7 pt-6 md:pt-12 pb-16 space-y-10">
            {/* Back button + breadcrumb */}
            <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                    <Link
                        href="/projects"
                        className="flex items-center gap-1 text-textPrimaryColor hover:text-white transition-colors duration-200"
                    >
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                        projects
                    </Link>
                    <span className="text-borderColor">/</span>
                    <span className="text-white">{project.title}</span>
                </div>
                <div className="border border-primaryColor/50 p-1">
                    <span className="self-start text-xs text-primaryColor whitespace-nowrap">
                        {project.type}
                    </span>
                </div>
            </div>
            {/* title */}
            <div className="">
                <h1 className="text-white text-2xl md:text-3xl font-semibold font-mono m-0">
                    <span className="text-primaryColor">#</span>{project.title}
                </h1>
                <p className="text-textPrimaryColor text-sm mt-2 m-0">{project.shortDescription}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Thumbnail strip */}
                <div className="lg:col-span-2 space-y-3">
                    <div className="relative w-full aspect-video border border-borderColor bg-backgroundColor overflow-hidden group">
                        <Image
                            src={project.images[activeImage]}
                            alt={`${project.title} screenshot ${activeImage + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            priority
                        />
                        {/* image counter */}
                        <span className="absolute bottom-3 right-3 bg-backgroundColor/80 border border-borderColor text-textPrimaryColor text-xs px-2 py-0.5 pointer-events-none">
                            {activeImage + 1} / {project.images.length}
                        </span>
                        {/* Prev / Next arrows */}
                        {project.images.length > 1 && (
                            <>
                                <button
                                    aria-label="Previous image"
                                    onClick={() => setActiveImage((i) => (i - 1 + project.images.length) % project.images.length)}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-backgroundColor/70 border border-borderColor text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:border-white/50 cursor-pointer"
                                >
                                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                                <button
                                    aria-label="Next image"
                                    onClick={() => setActiveImage((i) => (i + 1) % project.images.length)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-backgroundColor/70 border border-borderColor text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:border-white/50 cursor-pointer"
                                >
                                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>

                    {/* Thumbnail images */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                        {project.images.map((img, i) => (
                            <button
                                key={i}
                                aria-label={`View screenshot ${i + 1}`}
                                onClick={() => setActiveImage(i)}
                                className={`relative shrink-0 w-24 h-16 border transition-colors duration-150 overflow-hidden cursor-pointer ${activeImage === i
                                    ? 'border-primaryColor'
                                    : 'border-borderColor hover:border-white/40'
                                    }`}
                            >
                                <Image src={img} alt={`thumbnail ${i + 1}`} fill className="object-cover" sizes="64px" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sidebar: video + tech stack + links */}
                <div className="space-y-6">
                    {/* Video */}
                    {project.videoUrl && (
                        <div className="border border-borderColor overflow-hidden">
                            <div className="px-4 py-2 border-b border-borderColor">
                                <h2 className="text-white text-sm font-semibold font-mono m-0">
                                    <span className="text-primaryColor">// </span>demo-video
                                </h2>
                            </div>
                            <video
                                src={project.videoUrl}
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                                className="w-full block"
                            />
                        </div>
                    )}

                    {/* Tech stack */}
                    <div className="border border-borderColor p-4 space-y-3">
                        <h2 className="text-white text-sm font-semibold font-mono m-0">
                            <span className="text-primaryColor">// </span>tech-stack
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.filter(Boolean).map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs border border-primaryColor/40 text-primaryColor px-2 py-0.5"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-2">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full border border-primaryColor text-white text-sm py-2.5 transition-colors hover:bg-primaryColor/20"
                            >
                                <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                                View on GitHub
                                <span className="text-primaryColor text-xs">&lt;~&gt;</span>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full border border-borderColor text-textPrimaryColor text-sm py-2.5 transition-colors hover:border-white/40 hover:text-white"
                            >
                                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Full description */}
            <div className="border border-borderColor p-5 space-y-2">
                <h2 className="text-white text-sm font-semibold font-mono m-0">
                    <span className="text-primaryColor">// </span>description
                </h2>
                <p className="text-textPrimaryColor text-sm leading-relaxed m-0">{project.fullDescription}</p>
            </div>
        </div>
    )
}