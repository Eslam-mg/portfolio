import React from 'react'
import { myProjects } from '../Projects_List';

export async function generateStaticParams() {
    return myProjects.map((project) => ({
        id: String(project.id),
    }));
}

export default async function page() {
    return (
        <div>page</div>
    )
}