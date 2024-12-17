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
            font-size: 36px;
            margin-top: 40px;
            margin-bottom: 90px;
          `}

  ${({size}) =>
          size === "lg" &&
          css`
            font-size: 56px;
            //margin-top: 50px;
            //margin-bottom: 100px;
            margin-top: 50px;
            margin-bottom: 100px;
            @media (max-width: 1200px) {
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
