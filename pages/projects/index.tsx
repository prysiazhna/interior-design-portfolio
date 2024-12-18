'use client';

import React from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import { ProjectData } from "../../data/data.config";
import SectionWrapper from "../../components/section-wrapper";
import ProjectCard from "./project-card";
import ReasonsSection from "../reasons/reasons-section";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr); 
  }
`;

const Index: React.FC = () => {
    return (
        <SectionWrapper>
            <Title text="Projects" />
            <GridWrapper>
                {ProjectData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        imageSrc={project.imageSrc}
                        description={project.description}
                    />
                ))}
            </GridWrapper>
        </SectionWrapper>
    );
};

export default Index;
