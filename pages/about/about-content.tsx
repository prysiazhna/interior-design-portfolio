'use client';

import React from "react";
import styled from "styled-components";
import Socials from "../../components/Socials";
import Highlights from "./Highlights";
import Title from "../../components/Title";

const ContentWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    order: 1;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 0;
  color: white;
  text-align: center;
`;

const AboutContent: React.FC = () => (
    <ContentWrapper>
        <Title text="About me" />
        <Highlights />
        <Description>
            My name is Serhii, and I am an interior designer and 3D visualizer with
            experience in completing projects from visualization to finished spaces.
            It's important to me that all materials I use in my visualizations are
            accessible to every client. I work with different software, such as 3D
            Max and Cinema 4D. I take all the wishes of clients and their style,
            combining it with my experience to come to the best solution together.
        </Description>
        <Socials />
    </ContentWrapper>
);

export default AboutContent;
