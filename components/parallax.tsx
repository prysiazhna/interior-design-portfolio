'use client';

import React from 'react';
import styled from 'styled-components';

const ParallaxWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 calc(-50vw + 50%);
  height: 70vh; 
  width: 100vw; 
  max-width: 100vw;
`;

const ParallaxImage = styled.div`
  background-image: url('/images/projects/p2/p2-4.jpg'); 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const Parallax: React.FC = () => {
    return (
        <ParallaxWrapper>
            <ParallaxImage />
        </ParallaxWrapper>
    );
};

export default Parallax;