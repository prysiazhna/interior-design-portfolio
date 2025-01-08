'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import {router} from "next/client";
import { title} from "./animation";
import SvgCurve, {anim} from "./svg-curve";

const PageWrapper = styled.div`
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
  background-color: black;
  transition: opacity 0s linear 0.1s;
`;

const Container = styled(motion.div)`
  position: absolute;
  left: 50%;
  color: var(--main-color);
  font-size: 5rem;
  z-index: 99999;
  font-weight: 600;
  transform: translateX(-50%);
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }
`;

interface PageTransitionProps {
    children: React.ReactNode;
}
export default function PageTransition({ children }: PageTransitionProps) {
    const controls = useAnimation();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const routes: Record<string, string> = {
        '/': 'Home',
        '/about': 'About',
        '/contact': 'Contact',
        '/projects': 'Projects',
    };

    const getRouteName = () => {
        if (router.route.startsWith('/projects/')) {
            return 'Project Gallery';
        }
        return routes[router.route] || '';
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

    const routeName = getRouteName();

    return (
        <PageWrapper>
            <Background style={{ opacity: dimensions.width === 0 ? 1 : 0 }} />
            <Container {...anim(title)}>
                {routeName}
            </Container>
            {dimensions.width > 0 && <SvgCurve {...dimensions} controls={controls} />}
            {children}
        </PageWrapper>
    );
}