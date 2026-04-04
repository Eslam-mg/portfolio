import React from 'react'
interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
};

export default function ProjectCard({
    title,
    description,
    technologies,
    liveUrl = "#",
    githubUrl = "#",
}: ProjectCardProps) {
    return (
        <div className="border border-borderColor flex flex-col transition-colors hover:border-white/40">

        </div>
    )
};