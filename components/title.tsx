'use client';

import React from "react";
import styled, {css} from "styled-components";

const TitleWrapper = styled.div`
  text-align: center;
`;

const StyledTitle = styled.h2<{ size: "sm" | "md" | "lg" | undefined }>`
  font-weight: bold;
  text-align: center;
  color: #fff;

  ${({size}) =>
          size === "sm" &&
          css`
            font-size: 24px;
            margin-top: 30px;
            margin-bottom: 80px;
          `}

  ${({size}) =>
          size === "md" &&
          css`
            font-size: 70px;
            margin-top: 30px;
            margin-bottom: 30px;
            
            @media (max-width: 992px) {
              font-size: 50px;
              margin-bottom: 20px;
            }
            @media (max-width: 768px) {
              font-size: 40px;
              margin-bottom: 20px;
            }
            
            @media (max-width: 500px) {
              font-size: 30px;
              margin-bottom: 10px;
            }
          `}

  ${({size}) =>
          size === "lg" &&
          css`
            font-size: 70px;
            margin-top: 50px;
            margin-bottom: 100px;
            
            @media (max-width: 992px) {
              font-size: 50px;
              margin-top: 20px;
              margin-bottom: 50px;
            }
          `}
`;

interface TitleProps {
    text: string;
    size?: "sm" | "md" | "lg";
}

const Title: React.FC<TitleProps> = ({text, size = "lg"}) => (
    <TitleWrapper>
        <StyledTitle size={size as "sm" | "md" | "lg"}>{text}</StyledTitle>
    </TitleWrapper>
);

export default Title;
