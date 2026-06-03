"use client";

import React, { useState, useRef } from 'react';
import Image from "next/image";
interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    mainImage?: string;
    videoUrl?: string;
};

export default function ProjectCard({
    title,
    description,
    technologies,
    liveUrl = "#",
    githubUrl = "#",
    mainImage,
    videoUrl,
}: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch((err) => {
                console.debug("Video play interrupted/failed:", err);
            });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };
    return (
        <div className="h-fit border border-borderColor flex flex-col transition-colors hover:border-white/40">
            {/* Image area */}
            <div className="bg-backgroundColor h-44 relative border-b border-borderColor flex items-center justify-center overflow-hidden">
                {mainImage && (
                    <Image
                        src={mainImage}
                        alt={title}
                        fill
                        className={`object-fill transition-opacity duration-300`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                )}
            </div>

            {/* Tech tags */}
            <div className="flex gap-3 flex-wrap px-5 py-2 border-b border-borderColor">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="text-textPrimaryColor text-xs"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white m-0 mb-2 text-base md:text-lg font-semibold">{title}</h3>
                <p className="text-textPrimaryColor m-0 mb-4 text-[13px] leading-relaxed flex-1">
                    {description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 border border-primaryColor text-white text-sm px-3.5 py-1.5 transition-colors hover:bg-primaryColor/20"
                    >
                        GitHub <span className="text-primary text-xs">&lt;~&gt;</span>
                    </a>
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 border border-borderColor text-textPrimaryColor text-sm px-3.5 py-1.5 transition-colors hover:bg-borderColor/20"
                        >
                            Demo
                            <span className='flex items-center justify-center text-xs'>
                                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="rotate-90" aria-hidden="true"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /></svg>
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
};