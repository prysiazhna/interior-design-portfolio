import React, { useEffect, useState } from "react";
import { animate } from "framer-motion";
import styled from "styled-components";

const Number = styled.span`
  font-size: 62px;
  font-weight: bold;
  color: var(--main-color);

  @media (max-width: 1400px) {
    font-size: 35px;
  }
  @media (max-width: 992px) {
    font-size: 45px;
  }
`;

const AnimatedNumber: React.FC<{ targetNumber: number }> = ({ targetNumber }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(0, targetNumber, {
            duration: 2,
            delay: 0.5,
            onUpdate: (value) => setDisplayValue(Math.floor(value)),
        });

        return () => controls.stop();
    }, [targetNumber]);

    return <Number>{displayValue}+</Number>;
};

export default AnimatedNumber;