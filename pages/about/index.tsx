'use client';

import React from 'react';
import styled from 'styled-components';
import SectionWrapper from "../../components/section-wrapper";
import AboutContent from "./about-content";
import { motion } from "framer-motion";
import Parallax from "../../components/parallax";
import ReasonsSection from "../../components/reasons/reasons-section";

const ContentWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; 
  align-items: center;
  gap: 40px;
  min-height: calc(100vh - 60px); 
  margin: 0 auto;
  padding-bottom: 20px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  max-width: 50%;
  display: flex;
  justify-content: center; 
  align-items: center;
  
  @media (max-width: 992px) {
    max-width: 90%;
    margin-top: 40px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; 
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: auto;
  }
`;

const Index: React.FC = () => {
    const animationVariants = {
        hidden: { opacity: 0, y: 100, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 0.5, duration: 1.6, ease: "easeOut" },
        },
    };

    return (
        <SectionWrapper>
            <ContentWrapper>
                <ImageWrapper
                    initial="hidden"
                    animate="visible"
                    variants={animationVariants}
                >
                    <Image src="/images/serhii.jpeg" alt="Project" />
                </ImageWrapper>
                <AboutContent />
            </ContentWrapper>
            <Parallax/>
            <ReasonsSection/>
        </SectionWrapper>
    );
};

export default Index;