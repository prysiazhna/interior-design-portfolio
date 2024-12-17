'use client';

import React from "react";
import styled from "styled-components";

const ParallaxWrapper = styled.div<{ size: string }>`
  height: ${(props:any) => props.size};   position: relative;
  overflow: hidden;
`;

const ParallaxImage = styled.div<{ image: string }>`
  background-image: url(${(props:any) => props.image});
  background-attachment: fixed; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const ParallaxContent = styled.div`
  position: absolute;
  top: 55%;
  width: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 2;
  text-shadow: 0 2px 27px rgba(0, 0, 0, 1);
  font-size: 35px;
  //text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
`;

interface ParallaxSectionProps {
    title?: string;
    subtitle?: string;
    backgroundImage: string;
    size: string;
}

const Parallax: React.FC<ParallaxSectionProps> = ({title, subtitle, backgroundImage, size}) => {
    return (
        <ParallaxWrapper size={size}>
            <ParallaxImage image={backgroundImage}/>
            <ParallaxContent>
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </ParallaxContent>
        </ParallaxWrapper>
    );
};

export default Parallax;
