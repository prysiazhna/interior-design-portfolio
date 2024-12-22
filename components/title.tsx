'use client';

import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { motion, useInView } from "framer-motion";

const TitleWrapper = styled.div`
  text-align: center;
`;

const StyledTitle = styled(motion.h2)<{ size: "md" | "lg" | undefined }>`
  font-weight: bold;
  text-align: center;
  color: white;

  ${({ size }) =>
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

  ${({ size }) =>
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
    size?: "md" | "lg";
}

const Title: React.FC<TitleProps> = ({ text, size = "lg" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    return (
        <TitleWrapper ref={ref}>
            <StyledTitle
                size={size as "md" | "lg"}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
                {text}
            </StyledTitle>
        </TitleWrapper>
    );
};

export default Title;