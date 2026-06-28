import React from 'react'
import { myProjects } from '../Projects_List';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type PageProps = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const project = myProjects.find((p) => String(p.id) === id);
    if (!project) return { title: 'Project Not Found | Eslam' };
    return {
        title: `${project.title} | Eslam`,
        description: project.shortDescription,
    };
}

export default async function page({ params }: PageProps) {
    const { id } = await params;
    const project = myProjects.find((p) => String(p.id) === id);

    if (!project) notFound();
    return (
        <div>page</div>
    )
}