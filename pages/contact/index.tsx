'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Socials from "../../components/Socials";
import ContactForm from "./contact-form";

const SectionWrapper = styled.section`
  padding: 60px 80px;
  background: #181c1c;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100%;
  gap: 50px;


  p {
    font-size: 26px;
    line-height: 1.6;
    color: white;
    margin: 0;
    text-align: center;
    max-width: 750px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.div`
  font-weight: bold;
  text-align: center;
  color: #fff;
  font-size: 56px;
`

const Index: React.FC = () => {
    return (
        <SectionWrapper>
            <ContactWrapper>
                <Title>Get Free Consultation</Title>
                <p>I will gladly help you create a unique and stylish interior design, taking into account all your wishes, needs, and desired style.</p>
                <ContactForm />
                <Socials />
            </ContactWrapper>
        </SectionWrapper>
    );
};

export default Index;
