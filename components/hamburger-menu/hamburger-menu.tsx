'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import MenuAnimation from "./menu-animation";
import {NavItems} from "../../data/data.config";

const HamburgerButton = styled.div`
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  .burger {
    width: 30px;
    height: 3px;
    background-color: white;
    transition: all 0.3s;
  }

  &.active {
    .burger:nth-child(1) {
      transform: rotate(45deg) translate(8px, 7px);
    }
    .burger:nth-child(2) {
      opacity: 0;
    }
    .burger:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }
`;


const HamburgerMenu: React.FC = () => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <>
            <HamburgerButton
                className={isActive ? 'active' : ''}
                onClick={() => setIsActive(!isActive)}
            >
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </HamburgerButton>

            <AnimatePresence>
                {isActive && (
                    <MenuAnimation
                        navItems={NavItems}
                        setSelectedIndicator={setSelectedIndicator}
                        pathname={pathname}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default HamburgerMenu;