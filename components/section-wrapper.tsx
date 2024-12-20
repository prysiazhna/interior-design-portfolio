'use client';

import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 60px 100px;
  background: var(--main-color-bg);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export default SectionWrapper;
