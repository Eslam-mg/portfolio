import React from 'react'
import type { Metadata } from "next";
import SectionHeader from '@/src/components/SectionHeader/SectionHeader';
import { myProjects } from './Projects_List';
import ProjectCard from '@/src/components/ProjectCard/ProjectCard';
import ProjectsClient from './ProjectsClient';
export const metadata: Metadata = {
    title: "projects | Eslam",
    description:
        "Explore Eslam's projects in Front-End Development and Data Analysis, featuring React, Next.js, TypeScript, Power BI, SQL, and Excel solutions for building modern applications and extracting valuable insights from data.",
};

export default function page() {
    return <ProjectsClient />
};