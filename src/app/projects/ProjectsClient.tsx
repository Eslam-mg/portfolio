"use client";

import React, { useState, useRef } from 'react';
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
    return (
        <div>ProjectsClient</div>
    )
};