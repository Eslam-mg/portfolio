import React from 'react';
interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
};

export default function SectionHeader({
    title,
    subtitle,
    className = "",
}: SectionHeaderProps) {
    return (
        <div>SectionHeader</div>
    )
};