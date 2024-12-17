import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {curve, translate} from "./animation";

export const anim = (variants) => {
    return {
        variants,
        initial: 'initial',
        animate: 'enter',
        exit: 'exit',
    };
};

const StyledSVG = styled(motion.svg)`
  position: fixed;
  height: calc(100vh + 600px);
  width: 100vw;
  pointer-events: none;
  left: 0;
  top: 0;
  z-index: 9999;
`;

const StyledPath = styled(motion.path)``;

const SvgCurve = ({ height, width, controls }) => {
    const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

    const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

    return (
        <StyledSVG {...anim(translate)}>
            <StyledPath {...anim(curve(initialPath, targetPath))} />
        </StyledSVG>
    );
};

export default SvgCurve;