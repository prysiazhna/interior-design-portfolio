'use client';

import styled from "styled-components";
import { Reasons } from "../../data/data.config";
import React from "react";
import ReasonCard from "./reason-card";
import Title from "../title";

const Wrapper = styled.div`
  margin-top: 100px;
  min-height: calc(100vh - 150px);
  
  @media (max-width: 768px) {
    padding: 0 40px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;

  @media (max-width: 912px) {
    grid-template-columns: 1fr; 
  }
`;

const ReasonsSection: React.FC = () => {
    return (
        <Wrapper>
            <Content>
                <Title text="Why you can trust me" />
                <Grid>
                    {Reasons.map((reason, index) => (
                        <ReasonCard
                            key={index}
                            number={reason.number}
                            title={reason.title}
                            description={reason.description}
                            animationDelay={Math.floor(index / 2) * 1.2}
                            fromLeft={index % 2 === 0}
                        />
                    ))}
                </Grid>
            </Content>
        </Wrapper>
    );
};

export default ReasonsSection;