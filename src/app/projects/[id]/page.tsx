import React from 'react'
import { myProjects } from '../Projects_List';
import { notFound } from 'next/navigation';

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function page({ params }: PageProps) {
    const { id } = await params;
    const project = myProjects.find((p) => String(p.id) === id);

    if (!project) notFound();
    return (
        <div>page</div>
    )
}