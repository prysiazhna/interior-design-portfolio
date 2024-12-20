'use client';
import React from 'react';
import styled from 'styled-components';
import Socials from "../../components/Socials";
import ContactForm from "./contact-form";
import Title from "../../components/title";
import Footer from "../../components/footer";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SectionWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 35px;
  padding: 60px 80px;
  background: var(--main-color-bg);

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Text = styled.section`
  font-size: 20px;
  line-height: 1.6;
  color: white;
  margin: 0;
  text-align: center;
  max-width: 750px;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const Index: React.FC = () => {
    return (
        <PageWrapper>
            <SectionWrapper>
                <Title text="Get Free Consultation" size="md" />
                <Text>
                    I will be happy to help you create a unique and stylish interior design, taking into account all
                    your wishes, needs, and desired style
                </Text>
                <ContactForm />
                <Socials />
            </SectionWrapper>
            <Footer />
        </PageWrapper>
    );
};

export default Index;