import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color-bg);
  color: white;
  padding: 50px 50px;
  font-size: 16px;
  height: 120px;
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const FooterText = styled.span`
  margin: 0 5px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  line-height: 20px;

  &:hover {
    color: #00b2eb;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Divider = styled.span`
  margin: 0 8px;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            © {new Date().getFullYear()} Sehrii Ponych
            <Divider>/</Divider>
            <FooterText>Developed by</FooterText>
            <FooterLink
                href="https://prysiazhna.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
            > Olha Prysiazhna
            </FooterLink>
        </FooterContainer>
    );
};

export default Footer;