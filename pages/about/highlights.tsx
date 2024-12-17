'use client';

import React from "react";
import styled from "styled-components";

const HighlightsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 24px;
  }
`;

const Highlight = styled.div`
  text-align: center;

  .numbers {
    display: block;
    font-size: 62px;
    font-weight: bold;
    //color: rgb(75, 163, 191);
    color: rgb(0 178 235);
  }

  .labels {
    margin: 0;
    font-size: 22px;
    color: rgb(0 178 235);
  }
`;

const Highlights: React.FC = () => {
    const highlights = [
        { number: "5+", label: "years of experience" },
        { number: "30+", label: "projects completed successfully" },
        { number: "95%", label: "client satisfaction rate" }

];

    return (
        <HighlightsWrapper>
            {highlights.map((item, index) => (
                <Highlight key={index}>
                    <div className="numbers">{item.number}</div>
                    <div className="labels">{item.label}</div>
                </Highlight>
            ))}
        </HighlightsWrapper>
    );
};

export default Highlights;
