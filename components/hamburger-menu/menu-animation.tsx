import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type MenuProps = {
    navItems: { title: string; href: string }[];
    setSelectedIndicator: (href: string) => void;
    selectedIndicator: string;
};

const MenuWrapper = styled(motion.div)`
  height: 100vh;
  background-color: rgb(9,10,11);
  position: fixed;
  right: 0;
  top: 0;
  color: white;
  display: flex;
  z-index: 9;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px;
  box-sizing: border-box;

  @media (max-width: 992px) {
    padding: 50px;
  }
`;

const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform-style: preserve-3d;
  margin-top: 25px;
  margin-left: 25px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 80px;
  width: 100%;
`;

const Link = styled.a<{ $isActive: boolean }>`
  position: relative;
  cursor: pointer;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? 'var(--main-color)' : 'white')} !important;

  &:hover {
    transform: rotateX(90deg);
    text-decoration: none;
  }
`;

const Text = styled.p`
  font-size: 5rem;
  font-weight: 700;
  margin: 0;
  transition: all 0.4s;
  line-height: 5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 3rem;
  }

  &.secondary {
    transform: rotateX(-90deg) translateY(2.5rem);
    transform-origin: bottom center;
    position: absolute;
    top: 0;
    color: var(--main-color);
    opacity: 0;
  }

  ${Link}:hover &.secondary {
    opacity: 1;
  }

  ${Link}:hover &.primary {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const menuSlide = {
    initial: { x: 'calc(100% + 100px)' },
    enter: { x: '0', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: 'calc(100% + 100px)', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
};

const MenuAnimation: React.FC<MenuProps> = ({ navItems, setSelectedIndicator, selectedIndicator }) => {
    return (
        <MenuWrapper
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <Nav className="container">
                {navItems.map((data, index) => {
                    const isActive = selectedIndicator === data.href;
                    return (
                        <MotionDiv
                            key={index}
                            onMouseEnter={() => setSelectedIndicator(data.href)}
                            onMouseLeave={() => setSelectedIndicator(selectedIndicator)}
                        >
                            <Link href={data.href} $isActive={isActive}>
                                <Text className="primary">{data.title}</Text>
                                <Text className="secondary">{data.title}</Text>
                            </Link>
                        </MotionDiv>
                    );
                })}
            </Nav>
        </MenuWrapper>
    );
};

export default MenuAnimation;