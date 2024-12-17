'use client';

import React from 'react';
import styled from 'styled-components';
import SectionWrapper from "../../components/section-wrapper";
import ImageWrapper from "../../components/image-wrapper";
import AboutContent from "./about-content";
import ReasonsSection from "../reasons/reasons-section";

const ContentWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  justify-items: auto;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }
`;

const Index: React.FC = () => {
    return (
        <SectionWrapper>
            <ContentWrapper>
                <ImageWrapper src="/images/serhii2.jpeg" alt="Project" maxWidth="750px" />
                <AboutContent />
            </ContentWrapper>
            <ReasonsSection/>
        </SectionWrapper>
    );
};

export default Index;