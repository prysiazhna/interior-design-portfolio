'use client';

import React from "react";
import styled from "styled-components";
import AnimatedNumber from "./animated-number";

const HighlightsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
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

const Labels = styled.div`
  font-size: 22px;
  color: var(--main-color);
  margin-bottom: 30px;

  @media (max-width: 1400px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
  
  @media (max-width: 992px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`

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
                    <AnimatedNumber targetNumber={item.number} />
                    <Labels>{item.label}</Labels>
                </Highlight>
            ))}
        </HighlightsWrapper>
    );
};

export default Highlights;