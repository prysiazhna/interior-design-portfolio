import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type OverlayProps = {
    text: string;
    subText: string;
};

const StyledOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  white-space: nowrap;
  text-align: center;

  span {
    display: inline-block;
    margin-right: 8px;
    color: white;
    font-size: 7rem;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 4rem;
    }
    
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }

  div {
    color: white;
    font-size: 3rem;
    font-weight: normal;
    margin-top: 1rem;
    text-shadow: 0 2px 27px rgba(0, 0, 0, 1);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

const Overlay: React.FC<OverlayProps> = ({ text, subText }) => {
    return (
        <StyledOverlay>
            {text.split("").map((letter, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 2.5 + i * 0.2 }}
                >
                    {letter}
                </motion.span>
            ))}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 + text.length * 0.2 + 0.5 }}
            >
                {subText}
            </motion.div>
        </StyledOverlay>
    );
};

export default Overlay;
