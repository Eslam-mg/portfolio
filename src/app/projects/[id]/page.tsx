import React from 'react'
import { myProjects } from '../Projects_List';

type PageProps = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    return myProjects.map((project) => ({
        id: String(project.id),
    }));
}


export default async function page({ params }: PageProps) {
    return (
        <div>page</div>
    )
}