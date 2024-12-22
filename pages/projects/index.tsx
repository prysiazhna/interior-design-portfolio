'use client';

import React from "react";
import styled from "styled-components";
import SectionWrapper from "../../components/section-wrapper";
import Title from "../../components/title";
import { ProjectData } from "../../data/data.config";
import ProjectCard from "../../components/project-card";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Index: React.FC = () => {
    return (
        <SectionWrapper>
            <Title text="Projects" />
            <GridWrapper>
                {ProjectData.map((project) => (
                    <ProjectCard key={project.id} id={project.id} imageSrc={project.imageSrc} />
                ))}
            </GridWrapper>
        </SectionWrapper>
    );
};

export default Index;