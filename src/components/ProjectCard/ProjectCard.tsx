"use client";

import React, { useState, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { ProjectType } from '@/src/app/projects/Projects_List';

export default function ProjectCard({
    id,
    title,
    shortDescription,
    technologies,
    liveUrl = "#",
    githubUrl = "#",
    mainImage,
    videoUrl,
}: ProjectType) {
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoLoading, setIsVideoLoading] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoUrl) {
            setIsVideoLoading(true);
        }
        if (videoRef.current) {
            videoRef.current.play().catch((err) => {
                console.debug("Video play interrupted/failed:", err);
            });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsVideoLoading(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div className="h-fit border border-borderColor flex flex-col transition-colors hover:border-white/40">
            {/* Image area */}
            <div
                className="bg-backgroundColor h-44 relative border-b border-borderColor flex items-center justify-center overflow-hidden cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {mainImage && (
                    <Image
                        src={mainImage}
                        alt={title}
                        fill
                        className={`object-fill transition-opacity duration-300 ${isHovered && videoUrl && !isVideoLoading ? 'opacity-0' : 'opacity-100'}`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                )}

                {videoUrl && (
                    <div
                        className={`absolute z-50 inset-0 flex items-center justify-center bg-backgroundColor/50 transition-opacity duration-300 pointer-events-none ${isHovered && isVideoLoading ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="w-12 h-12 rounded-full bg-primaryColor/20 border border-primaryColor/40 flex items-center justify-center animate-scale-pulse">
                            <div className="w-4 h-4 rounded-full bg-primaryColor shadow-[0_0_12px_#C778DD]" />
                        </div>
                    </div>
                )}

                {videoUrl && (
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        muted
                        loop
                        playsInline
                        onPlaying={() => setIsVideoLoading(false)}
                        onWaiting={() => setIsVideoLoading(true)}
                        className={`absolute z-0 inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered && !isVideoLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    />
                )}
            </div>

            {/* Tech tags */}
            <div className="flex gap-3 flex-wrap px-4 py-2 border-b border-borderColor">
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
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-white m-0 mb-2 text-base md:text-lg font-semibold">{title}</h3>
                <p className="text-textPrimaryColor m-0 mb-4 text-xs leading-relaxed flex-1">
                    {shortDescription}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                    <Link
                        href={`/projects/${id}`}
                        className="flex items-center gap-1.5 border border-primaryColor text-white text-sm px-3.5 py-1.5 transition-colors hover:bg-primaryColor/20"
                    >
                        Details <span className="text-primaryColor text-xs">→</span>
                    </Link>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 border border-borderColor text-textPrimaryColor text-sm px-3.5 py-1.5 transition-colors hover:bg-borderColor/20"
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