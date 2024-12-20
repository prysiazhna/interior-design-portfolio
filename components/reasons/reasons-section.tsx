'use client';

import styled from "styled-components";
import { Reasons } from "../../data/data.config";
import React from "react";
import ReasonCard from "./reason-card";
import Title from "../title";

const Wrapper = styled.div`
  margin: 100px 0;
`
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
        </Wrapper>
    );
};

export default ReasonsSection;
