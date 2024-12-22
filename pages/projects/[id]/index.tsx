'use client';

import React, { useRef } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { ProjectData } from "../../../data/data.config";
import SectionWrapper from "../../../components/section-wrapper";
import Title from "../../../components/title";
import { ProjectDataModel } from "../../../data/types";
import { motion, useInView } from "framer-motion";

const HorizontalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 70px;
  width: 100%;
`;

const VerticalGrid = styled.div`
  display: grid;
  margin-top: 70px;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;
`;

const MotionImage = styled(motion.img)`
  width: 100%;
  height: auto;
  max-width: 1900px;
  margin: 0 auto;
`;

const AnimatedImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

    const animationVariants = {
        hidden: { opacity: 0, y: 150 , scale: 0.9},
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.6, ease: "easeOut" } },
    };

    return (
        <MotionImage
            ref={ref}
            src={src}
            alt={alt}
            variants={animationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        />
    );
};

const ProjectPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const project: ProjectDataModel | undefined = ProjectData.find((proj) => proj.id === id);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <SectionWrapper>
            <Title text="Project Gallery" />
            <HorizontalGrid>
                {project.images.horizontal.map((src, index) => (
                    <AnimatedImage key={index} src={src} alt={`Horizontal Image ${index + 1}`} />
                ))}
            </HorizontalGrid>

            <VerticalGrid>
                {project.images.vertical.map((src, index) => (
                    <AnimatedImage key={index} src={src} alt={`Vertical Image ${index + 1}`} />
                ))}
            </VerticalGrid>
        </SectionWrapper>
    );
};

export default ProjectPage;