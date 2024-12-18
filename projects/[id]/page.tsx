'use client';

import React from "react";
import { useParams } from "next/navigation";
import Project_1 from "./project_1";
import Project_2 from "./project_2";

const ProjectPage: React.FC = () => {
    const { id } = useParams(); // The switch used for projects due to the project content will be different for each project
    console.log(id)
    switch (id) {
        case "1":
            return <Project_1 />;
        case "2":
            return <Project_2 />;
        default:
            return <p>Project not found</p>;
    }
};

export default ProjectPage;
