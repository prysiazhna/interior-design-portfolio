'use client';

import React from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const HighlightsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 50px;
  align-items: center;
  flex-direction: row;
  
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const Highlight = styled.div`
  text-align: center;
`;

const Numbers = styled.div`
  display: block;
  font-size: 62px;
  font-weight: bold;
  color: var(--main-color);

  @media (max-width: 992px) {
    font-size: 40px ;
  }
`
const Labels = styled.div`
  margin: 0;
  font-size: 22px;
  color: var(--main-color);

  @media (max-width: 1000px) {
    font-size: 16px;
  }
`
const AnimatedNumber: React.FC<{ targetNumber: number | string }> = ({ targetNumber }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        animate(count, typeof targetNumber === "string" ? parseInt(targetNumber) : targetNumber, {
            duration: 2, delay: 1
        });
    }, [count, targetNumber]);

    return <motion.span>{rounded}</motion.span>;
};

const Highlights: React.FC = () => {
    const highlights = [
        { number: 5, label: "years of experience" },
        { number: 30, label: "projects completed successfully" },
        { number: 95, label: "client satisfaction rate" },
    ];

    return (
        <HighlightsWrapper>
            {highlights.map((item, index) => (
                <Highlight key={index}>
                    <Numbers>
                        <AnimatedNumber targetNumber={item.number} />+
                    </Numbers>
                    <Labels>{item.label}</Labels>
                </Highlight>
            ))}
        </HighlightsWrapper>
    );
};

export default Highlights;