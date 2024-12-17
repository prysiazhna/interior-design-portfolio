'use client';

import styled from "styled-components";
import React from "react";

const CardWrapper = styled.div`
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
  color: rgb(0 178 235);;
`;

const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: rgb(0 178 235);;
  margin-left: 15px;
`;

const Content = styled.div`
  div {
    font-size: 32px;
    margin: 0 0 8px;
    color: rgb(0 178 235);;
    font-family: var(--font-inter-regular), sans-serif;
  }

  span {
    font-size: 24px;
    color: white;
    margin: 0;
    font-family: var(--font-inter-light), sans-serif;
  }
`;
interface ReasonCardProps {
    number: string;
    title: string;
    description: string;
}
const ReasonCard: React.FC<ReasonCardProps> = ({ number, title, description }) => {
    return (
        <CardWrapper>
            <NumberWrapper>
                <Number>{number}</Number>
                <Divider />
            </NumberWrapper>
            <Content>
                <div>{title}</div>
                <span>{description}</span>
            </Content>
        </CardWrapper>
    );
};

export default ReasonCard;
