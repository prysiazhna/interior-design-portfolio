import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type OverlayProps = {
    subText: string;
};

type AnimatedWordProps = {
    word: string;
    delay: number;
};

const StyledOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
`;

const NameWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    display: block;
    gap: 0;
  }
`;

const NameLine = styled.div`
  color: white;
  font-size: 7rem;
  font-weight: bold;
  margin: 0;
  letter-spacing: 10px;

  @media (max-width: 768px) {
    font-size: 4rem;
    display: block;
  }
`;

const SubText = styled(motion.div)`
  color: white;
  font-size: 3rem;
  font-weight: normal;
  margin-top: 1rem;
  text-shadow: 0 2px 27px rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    margin-top: 2rem;
    font-size: 2.5rem;
  }
`;

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word, delay }) => (
    <NameLine>
        {word.split("").map((letter, i) => (
            <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: delay + i * 0.25,
                }}
            >
                {letter}
            </motion.span>
        ))}
    </NameLine>
);

const Overlay: React.FC<OverlayProps> = ({ subText }) => {
    const firstName = "Serhii";
    const lastName = "Ponych";

    return (
        <StyledOverlay>
            <NameWrapper>
                <AnimatedWord word={firstName} delay={1.2} />
                <AnimatedWord word={lastName} delay={1.2 + firstName.length * 0.25} />
            </NameWrapper>
            <SubText
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 1.2 + firstName.length * 0.25 + lastName.length * 0.25 + 0.5,
                }}
            >
                {subText}
            </SubText>
        </StyledOverlay>
    );
};

export default Overlay;