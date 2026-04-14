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
                <p className="text-textPrimaryColor m-0 mb-4 text-[13px] leading-relaxed flex-1">
                    {description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 border border-primaryColor text-white text-xs px-3.5 py-1.5 transition-colors hover:bg-primaryColor/20"
                    >
                        GitHub <span className="text-primary text-xs">&lt;~&gt;</span>
                    </a>
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 border border-borderColor text-textPrimaryColor text-xs px-3.5 py-1.5 transition-colors hover:bg-borderColor/20"
                        >
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
};