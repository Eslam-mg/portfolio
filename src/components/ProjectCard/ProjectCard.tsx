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
            {/* Image area */}
            <div className="bg-backgroundColor h-44 relative border-b border-borderColor flex items-center justify-center overflow-hidden">
                {/* Tech tags */}
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-bg text-gray-text text-[11px] px-2 py-0.5 border border-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white m-0 mb-2 text-base font-semibold">{title}</h3>
                <p className="text-gray-text m-0 mb-4 text-[13px] leading-relaxed flex-1">
                    {description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-text/60 text-gray-text text-[13px] px-3.5 py-1.5 transition-colors hover:border-white hover:text-white flex items-center gap-1.5"
                    >
                        Live <span className="text-primary text-xs">&lt;~&gt;</span>
                    </a>
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/20 text-gray-text text-[13px] px-3.5 py-1.5 transition-colors hover:border-white/50 hover:text-white"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
};