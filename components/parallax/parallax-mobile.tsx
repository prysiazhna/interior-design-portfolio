'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

const ParallaxWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 calc(-50vw + 50%);
  height: 70vh;
  width: 100vw;
  max-width: 100vw;
`;

const ParallaxImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%; 
  background-image: url('/images/projects/p2/p2-4.jpg'); 
  background-size: cover;
  background-position: center;
`;

const ParallaxMobile: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.9 1", "1.3 0"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["10%", "-70%"]);
    return (
        <ParallaxWrapper ref={ref}>
            <ParallaxImage style={{ y }} />
        </ParallaxWrapper>
    );
};

export default ParallaxMobile;