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
        <div>SectionHeader</div>
    )
};