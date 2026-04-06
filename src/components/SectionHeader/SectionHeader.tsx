import React from 'react';
interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    showLine?: boolean;
};

export default function SectionHeader({
    title,
    subtitle,
    className = "",
    showLine = false,
}: SectionHeaderProps) {
    return (
        <div className={`mb-10 ${className}`}>
            <h2 className="text-white text-2xl font-semibold m-0 flex items-center font-mono">
                <span className="text-primary">#</span>
                {title}
                <span className="inline-block ml-3 h-0.5 w-20 bg-primary self-center" />
            </h2>
            {subtitle && (
                <p className="text-gray-text m-0 mt-2 text-sm">{subtitle}</p>
            )}
        </div>
    )
};