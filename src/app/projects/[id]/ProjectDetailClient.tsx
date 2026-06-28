"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectType, myProjects } from '../Projects_List';

export default function ProjectDetailClient({ project }: { project: ProjectType }) {
    const [activeImage, setActiveImage] = useState(0);
    return (
        <div className="text-textPrimaryColor px-6 sm:px-7 pt-6 md:pt-12 pb-16 space-y-10">

        </div>
    )
}