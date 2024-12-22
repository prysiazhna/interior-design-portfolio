'use client';

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Highlights from "../../components/highlights/highlights";
import Socials from "../../components/socials";

const ContentWrapper = styled(motion.div)`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 992px) {
    max-width: 90%;
    gap: 16px;
  }
`;

const PageTitle = styled(motion.div)`
  font-weight: bold;
  text-align: center;
  color: white;
  font-size: 70px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    margin-top: 0;
    font-size: 50px;
    margin-bottom: 10px;
  }
  
  @media (max-width: 992px) {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

const Description = styled(motion.p)`
  font-size: 20px; 
  line-height: 1.6;
  margin: 0;
  color: white;
  text-align: center;

  @media (max-width: 1400px) {
    font-size: 14px;
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }
`;

const Location = styled(motion.p)`
  font-size: clamp(16px, 20px, 28px);
  line-height: 1.6;
  margin: 20px 0;
  color: var(--main-color);
  text-align: center;
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1,
            staggerChildren: 0.5,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.6, ease: "easeOut" } },
};

const AboutContent: React.FC = () => {
    return (
        <ContentWrapper
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <PageTitle variants={childVariants}>About me</PageTitle>

            <motion.div variants={childVariants}>
                <Highlights />
            </motion.div>

            <motion.div variants={childVariants}>
                <Description>
                    My name is Serhii, and I am an interior designer and 3D visualizer
                    with experience in completing projects from visualization to finished
                    spaces. It&apos;s important to me that all materials I use in my
                    visualizations are accessible to every client. I take all the wishes
                    of clients and their style, combining it with my experience to come
                    to the best solution together.
                </Description>
                <Location>
                    Seattle, WA
                </Location>
                <Socials />
            </motion.div>
        </ContentWrapper>
    );
};

export default AboutContent;