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
        </div>
    )
}