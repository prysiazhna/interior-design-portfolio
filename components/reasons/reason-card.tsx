'use client';

import styled from "styled-components";
import React, {useRef} from "react";
import {motion, useInView} from "framer-motion";
const CardWrapper = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 80%;
`;

const NumberWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

const Number = styled.div`
  font-size: 28px;
  color: var(--main-color);
`;

const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: var(--main-color);
  margin-left: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 32px;
  margin: 0 0 8px;
  color: var(--main-color);
  font-family: var(--font-inter-regular), sans-serif;
`;

const Description = styled.span`
  font-size: 24px;
  color: white;
  margin: 0;
  font-family: var(--font-inter-light), sans-serif;
`;

interface ReasonCardProps {
    number: string;
    title: string;
    description: string;
    animationDelay: number;
    fromLeft: boolean;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ number, title, description, animationDelay, fromLeft }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <CardWrapper
            ref={ref}
            initial={{ opacity: 0, x: fromLeft ? -50 : 50 }} // Напрямок залежить від пропсу
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.6, delay: animationDelay }}
        >
            <NumberWrapper>
                <Number>{number}</Number>
                <Divider />
            </NumberWrapper>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Content>
        </CardWrapper>
    );
};

export default ReasonCard;
