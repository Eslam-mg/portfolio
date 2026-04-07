import React from 'react';
interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    showLine?: boolean;
    lineWidth?: string;
};

export default function SectionHeader({
    title,
    subtitle,
    className = "",
    showLine = false,
    lineWidth = "",
}: SectionHeaderProps) {
    return (
        <div className={className}>
            <h2 className="text-white text-2xl font-semibold m-0 flex items-center font-mono">
                <span className="text-primaryColor">#</span>
                {title}
                {showLine && (<span className={`inline-block ml-3 h-px bg-primaryColor self-center ${lineWidth}`} />)}
            </h2>
            {subtitle && (
                <p className="text-textPrimaryColor m-0 mt-2 text-sm">{subtitle}</p>
            )}
        </div>
    )
};