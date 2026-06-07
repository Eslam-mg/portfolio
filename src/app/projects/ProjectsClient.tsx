"use client";

import useOutsideClick from '@/src/hook/useOutsideClick';
import React, { useState, useRef } from 'react';
import { myProjects } from './Projects_List';
import SectionHeader from '@/src/components/SectionHeader/SectionHeader';
import { AngleDownIcon } from '@/src/components/UI/Icon/Icon';
import ProjectCard from '@/src/components/ProjectCard/ProjectCard';
// Available project categories for filtering
type FilterType = 'all' | 'front-end' | 'data analysis';

// Filter options displayed in the dropdown menu
const filterOptions: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'front-end', label: 'Front-End' },
    { key: 'data analysis', label: 'Data Analysis' },
];

export default function ProjectsClient() {
    // Stores the currently selected filter
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    // Controls dropdown open/close state
    const [isOpen, setIsOpen] = useState(false);
    // Reference to the dropdown container
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close the dropdown automatically when the user clicks outside
    useOutsideClick(dropdownRef, isOpen, () => setIsOpen(false));

    // Get the label of the active filter for displa
    const activeLabel = filterOptions.find((o) => o.key === activeFilter)?.label ?? 'All';
    // Filter projects based on the selected category
    const filteredProjects =
        activeFilter === 'all'
            ? myProjects
            : myProjects.filter((p) => p.type === activeFilter);
    return (
        <div className="text-textPrimaryColor font-mono px-6 md:px-12 pt-6 md:pt-12 space-y-6">
            <div className="flex flex-row items-center justify-between">
                <SectionHeader title="Projects" subtitle="List of my projects" />
                <div ref={dropdownRef} className="relative w-48">
                    <button type="button" aria-haspopup="listbox" className="w-40 flex items-center justify-between gap-2 px-4 py-2 text-xs border border-borderColor text-textPrimaryColor hover:border-white/40 hover:text-white transition-all duration-200 cursor-pointer bg-transparent"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <span className="flex items-center gap-2">
                            {activeLabel}
                        </span>

                        <AngleDownIcon width={16} height={16} className='mt-0.5' />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <ul
                            role="listbox"
                            aria-label="Filter projects by type"
                            className="w-40 absolute top-full mt-1 border border-borderColor bg-backgroundColor z-50 shadow-[0_8px_24px_rgba(0,0,0,0.4)] overflow-hidden"
                        >
                            {filterOptions.map(({ key, label }) => {
                                const isActive = activeFilter === key;
                                return (
                                    <li
                                        key={key}
                                        role="option"
                                        aria-selected={isActive}
                                        onClick={() => {
                                            setActiveFilter(key);
                                            setIsOpen(false);
                                        }}
                                        className={[
                                            'flex items-center gap-2 px-4 py-2 text-xs cursor-pointer transition-colors duration-150',
                                            isActive
                                                ? 'text-white bg-primaryColor/10 border-l-2 border-primaryColor'
                                                : 'text-textPrimaryColor hover:bg-white/5 hover:text-white border-l-2 border-transparent',
                                        ].join(' ')}
                                    >
                                        {label}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-textPrimaryColor gap-3">
                        <span className="text-primaryColor text-3xl">{'{ }'}</span>
                        <p className="text-sm">No projects found for this category.</p>
                    </div>
                )}
            </div>
        </div>
    )
};