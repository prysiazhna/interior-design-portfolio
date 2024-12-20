'use client';

import React from "react";
import styled from "styled-components";
import {useRouter} from "next/router";
import {ProjectData} from "../../../data/data.config";
import SectionWrapper from "../../../components/section-wrapper";
import Title from "../../../components/title";
import {ProjectDataModel} from "../../../data/types";

const HorizontalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 70px;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    max-width: 1900px;
    margin: 0 auto;
  }
`;

const VerticalGrid = styled.div`
  display: grid;
  margin-top: 70px;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;

  img {
    width: 100%;
    height: auto;
  }
`;
const DescriptionWrapper = styled.div`
  font-size: 2rem;
  line-height: 1.5;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`
const Task = styled.div`
  font-size: 35px;
  font-weight: 600;
  color:  var(--main-color);
`

const DescriptionText = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  width: 80%;
`

const ProjectPage: React.FC = () => {
    const router = useRouter();
    const {id} = router.query;

    const project: ProjectDataModel | undefined = ProjectData.find((proj) => proj.id === id);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <SectionWrapper>
            <Title text="Project Gallery"/>
            <DescriptionWrapper>
                <Task>Main task</Task>
                <DescriptionText>{project.description}</DescriptionText>
            </DescriptionWrapper>
                <HorizontalGrid>
                    {project.images.horizontal.map((src, index) => (
                        <img key={index} src={src} alt={`Horizontal Image ${index + 1}`} />
                    ))}
                </HorizontalGrid>

                <VerticalGrid>
                    {project.images.vertical.map((src, index) => (
                        <img key={index} src={src} alt={`Vertical Image ${index + 1}`} />
                    ))}
                </VerticalGrid>
        </SectionWrapper>
    );
};

export default ProjectPage;