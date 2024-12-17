'use client';

import styled from "styled-components";
import { Reasons } from "../../data/data.config";
import React from "react";
import Title from "../../components/Title";
import ReasonCard from "./reason-card";
import SectionWrapper from "../../components/section-wrapper";

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
        <SectionWrapper>
            <Title text="Why you can trust me" />
            <Grid>
                {Reasons.map((reason, index) => (
                    <ReasonCard
                        key={index}
                        number={reason.number}
                        title={reason.title}
                        description={reason.description}
                    />
                ))}
            </Grid>
        </SectionWrapper>
    );
};

export default ReasonsSection;
