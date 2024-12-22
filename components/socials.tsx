'use client';

import React from "react";
import styled from "styled-components";
import { ImBehance2, ImLinkedin, ImMail } from "react-icons/im";
import MagneticButton from "./magnetic-button";

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 26px;
  align-items: center;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: color 0.3s ease;
  color: white;

  &:hover {
    color: var(--main-color);
  }
`;

const Socials: React.FC = () => {
    const socialPlatforms = [
        { name: "Behance", url: "https://www.behance.net/FreeSpacedesign", icon: <ImBehance2 size={50} /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/serhii-ponych-070762226/", icon: <ImLinkedin size={50} /> },
        { name: "Gmail", url: "mailto:serhii.ponych27@gmail.com", icon: <ImMail size={50} /> },
    ];

    return (
        <SocialsWrapper>
            {socialPlatforms.map((platform) => (
                <MagneticButton key={platform.name}>
                    <SocialLink href={platform.url} target="_blank" title={platform.name}>
                        {platform.icon}
                    </SocialLink>
                </MagneticButton>
            ))}
        </SocialsWrapper>
    );
};

export default Socials;