'use client';
import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BannerImages } from "../../data/data.config";
import BannerOverlay from "./banner-overlay";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--main-color-bg);
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const TiltedWrapper = styled.div`
  position: absolute;
  width: 170%;
  height: 170%;
  transform: rotate(-10deg) translate(-20%, -10%);
  display: flex;
  flex-direction: row;
  left: 27%;
  gap: 20px;
  z-index: 0;
`;

const ScrollingColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto;
  min-width: 470px;
  height: 470px;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 180px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const getImage = (colIndex: number, rowIndex: number) => {
    const column = BannerImages[colIndex % BannerImages.length];
    const validIndex = ((rowIndex % column.length) + column.length) % column.length;
    return column[validIndex];
};

const Banner: React.FC = () => {
    const totalColumns = BannerImages.length;
    const totalImagesPerColumn = Math.ceil((window.innerHeight * 2) / 370) + 6;

    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = BannerImages.flatMap((column) =>
                column.map(({ src }) => {
                    return new Promise<void>((resolve) => {
                        const img = new window.Image();
                        img.src = src;
                        img.onload = () => resolve();
                        img.onerror = () => {
                            console.error(`Failed to load image: ${src}`);
                            resolve();
                        };
                    });
                })
            );
            await Promise.all(imagePromises);
        };

        preloadImages();
    }, []);


    return (
        <Container>
            <DarkOverlay />
            <BannerOverlay text="Serhii  Ponych" subText="Interior Designer" />
            <TiltedWrapper>
                {Array.from({ length: totalColumns }, (_, colIndex) => (
                    <ScrollingColumn
                        key={colIndex}
                        initial={{
                            y: colIndex % 2 === 0 ? "-50%" : "-100%",
                        }}
                        animate={{
                            y: colIndex % 2 === 0 ? "-100%" : "0%",
                        }}
                        transition={{
                            duration: 100,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {Array.from({ length: totalImagesPerColumn + 6 }, (_, rowIndex) => {
                            const { src, alt } = getImage(colIndex, rowIndex);
                            return (
                                <ImageWrapper key={`${colIndex}-${rowIndex}`}>
                                    <Image src={src} alt={alt} />
                                </ImageWrapper>
                            );
                        })}
                    </ScrollingColumn>
                ))}
            </TiltedWrapper>
        </Container>
    );
};

export default Banner;
