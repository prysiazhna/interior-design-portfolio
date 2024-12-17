// 'use client';
//
// import React from "react";
// import {useParams} from "next/navigation";
// import styled from "styled-components";
// import { ProjectData } from "@/app/data/data.config";
// import Image from "next/image";
//
// const ProjectPageWrapper = styled.div`
//   padding: 40px 20px;
//   max-width: 800px;
//   margin: 0 auto;
// `;
//
// const Title = styled.h1`
//   font-size: 28px;
//   font-weight: bold;
//   margin-bottom: 20px;
// `;
//
// const ImageWrapper = styled.div`
//   width: 100%;
//   aspect-ratio: 16 / 9;
//   position: relative;
//   margin-bottom: 20px;
// `;
//
// const Content = styled.p`
//   font-size: 16px;
//   line-height: 1.6;
// `;
//
// const ProjectPage: React.FC = () => {
//     const params = useParams(); // Отримуємо параметри з URL
//     const id = params.id; // Динамічний параметр маршруту
//
//     console.log(id)
//     const project = ProjectData.find((proj) => proj.id === id);
//
//     if (!project) {
//         return <p>Project not found</p>;
//     }
//
//     return (
//         <ProjectPageWrapper>
//             <Title>{project.details.title}</Title>
//             <ImageWrapper>
//                 <Image
//                     src={project.imageSrc}
//                     alt={project.details.title}
//                     layout="fill"
//                     objectFit="cover"
//                 />
//             </ImageWrapper>
//             <Content>{project.details.content}</Content>
//         </ProjectPageWrapper>
//     );
// };

// export default ProjectPage;
'use client';

import React from "react";
import { useParams } from "next/navigation";
import Project_1 from "./project_1";
import Project_2 from "./project_2";

const ProjectPage: React.FC = () => {
    const { id } = useParams(); // Get the dynamic id from the route.
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
