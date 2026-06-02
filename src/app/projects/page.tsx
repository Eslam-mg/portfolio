import React from 'react'
import type { Metadata } from "next";
import SectionHeader from '@/src/components/SectionHeader/SectionHeader';
import { myProjects } from './Projects_List';
import ProjectCard from '@/src/components/ProjectCard/ProjectCard';
export const metadata: Metadata = {
    title: "projects | Eslam",
    description:
        "Explore Eslam's projects in Front-End Development and Data Analysis, featuring React, Next.js, TypeScript, Power BI, SQL, and Excel solutions for building modern applications and extracting valuable insights from data.",
};

export default function page() {
    return (
        <div className="font-mono text-gray-text px-6 md:px-12 pt-6 md:pt-12 overflow-hidden space-y-24">
            <SectionHeader title="Projects" subtitle="List of my projects" />

            <div className="">
                {myProjects.map(project =>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                    />
                )}
            </div>
        </div>
    )
};