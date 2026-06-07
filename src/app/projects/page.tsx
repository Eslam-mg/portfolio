"use client";

import React, { useState, useRef } from 'react';
import type { Metadata } from "next";
import SectionHeader from '@/src/components/SectionHeader/SectionHeader';
import { myProjects } from './Projects_List';
import ProjectCard from '@/src/components/ProjectCard/ProjectCard';
export const metadata: Metadata = {
    title: "projects | Eslam",
    description:
        "Explore Eslam's projects in Front-End Development and Data Analysis, featuring React, Next.js, TypeScript, Power BI, SQL, and Excel solutions for building modern applications and extracting valuable insights from data.",
};

type FilterType = 'all' | 'front-end' | 'data analysis';

const filterOptions: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'front-end', label: 'Front-End' },
    { key: 'data analysis', label: 'Data Analysis' },
];

export default function page() {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    return (
        <div className="font-mono text-gray-text px-6 md:px-12 pt-6 md:pt-12 overflow-hidden space-y-6">
            <SectionHeader title="Projects" subtitle="List of my projects" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {myProjects.map(project =>
                    <ProjectCard
                        key={project.id}
                        {...project}
                    />
                )}
            </div>
        </div>
    )
};