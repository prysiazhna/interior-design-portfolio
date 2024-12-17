'use client';

import React from "react";
import styled from "styled-components";

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  margin-top: 30px;

  a {
    display: flex;
    align-items: center;
    transition: background 0.3s;

    img{
      width: 50px;
    }

    &:hover {
      transform: scale(1.3);
      transition: transform 500ms ease;
    }
  }
`;

const Socials: React.FC = () => {
    const socialPlatforms = [
        { name: "Behance", url: "#", icon: "/icons/behance.svg" },
        { name: "Instagram", url: "#", icon: "/icons/instagram.svg" },
        { name: "Telegram", url: "#", icon: "/icons/linkedin.svg" },
        // { name: "Email", url: "#", icon: "/icons/email.svg" },
    ];

    return (
        <SocialsWrapper>
            {socialPlatforms.map((platform) => (
                <a href={platform.url} key={platform.name} title={platform.name}>
                    <img src={platform.icon} alt={platform.name} />
                </a>
            ))}
        </SocialsWrapper>
    );
};

export default Socials;
