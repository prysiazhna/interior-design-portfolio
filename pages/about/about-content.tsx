'use client';

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Socials from "../../components/Socials";
import Highlights from "./Highlights";
import Title from "../../components/title";

const ContentWrapper = styled(motion.div)`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  gap: 20px;
  padding: 20px;

  @media (max-width: 992px) {
    max-width: 90%;
    gap: 16px;
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(16px, 2vw, 20px); 
  line-height: 1.6;
  margin: 0;
  color: white;
  text-align: center;
`;

const Location = styled(motion.p)`
  font-size: clamp(18px, 2.2vw, 28px);
  line-height: 1.6;
  margin: 20px 0;
  color: var(--main-color);
  text-align: center;
`

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.3,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutContent: React.FC = () => {
    return (
        <ContentWrapper
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div variants={childVariants}>
                <Title text={"About me"} />
            </motion.div>

            <motion.div variants={childVariants}>
                <Highlights />
            </motion.div>

            <motion.div variants={childVariants}>
                <Description>
                    My name is Serhii, and I am an interior designer and 3D visualizer
                    with experience in completing projects from visualization to finished
                    spaces. It's important to me that all materials I use in my
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