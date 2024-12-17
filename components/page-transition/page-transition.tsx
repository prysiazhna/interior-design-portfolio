'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import {router} from "next/client";
import { title} from "./animation";
import SvgCurve, {anim} from "./svg-curve";

const PageWrapper = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  position: fixed;
  height: calc(100vh + 600px);
  width: 100vw;
  pointer-events: none;
  left: 0;
  top: 0;
  z-index: 9999;
  background-color: #000; /* Same as background color to avoid flicker */
  transition: opacity 0s linear 0.1s;
`;

const Container = styled(motion.div)`
  position: absolute;
  left: 50%;
  color: rgb(75, 163, 191);
  font-size: 5rem;
  z-index: 99999;
  font-weight: 600;
  transform: translateX(-50%);
  text-align: center;
`;

export default function PageTransition({ children, backgroundColor }) {
    const controls = useAnimation();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const routes = {
        '/': 'Home',
        '/about': 'About',
        '/contact': 'Contact',
    };

    useEffect(() => {
        const resize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            controls.start('enter');
        }, 0);

        return () => clearTimeout(timeout);
    }, [controls]);

    return (
        <PageWrapper backgroundColor={backgroundColor}>
            <Background style={{ opacity: dimensions.width === 0 ? 1 : 0 }} />
            <Container {...anim(title)}>
                 {routes[router.route]}
            </Container>
            {dimensions.width > 0 && <SvgCurve {...dimensions} controls={controls} />}
            {children}
        </PageWrapper>
    );
}