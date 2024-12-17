'use client';

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ProjectSection from "../../pages/projects/ProjectSection";

const ImageWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  img {
    border-radius: 8px;
    object-fit: cover;
  }
`;

const Project_1: React.FC = () => {
    return (
        <div>
            <ProjectSection title="Kitchen">
                <ImageWrapper>
                    <Image src="/images/p1/p1-6.jpg" alt="Kitchen 1" width={300} height={200} />
                    <Image src="/images/p1/p1-4.jpg" alt="Kitchen 2" width={300} height={200} />
                </ImageWrapper>
            </ProjectSection>
            <ProjectSection title="Bathroom">
                <ImageWrapper>
                    <Image src="/images/p1/p1-6.jpg" alt="Kitchen 1" width={300} height={200} />
                    <Image src="/images/p1/p1-4.jpg" alt="Kitchen 2" width={300} height={200} />
                </ImageWrapper>
            </ProjectSection>
        </div>
    );
};

export default Project_1;
