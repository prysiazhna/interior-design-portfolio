import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {BannerImages} from "../../data/data.config";

interface ScrollingColumnProps {
    colIndex: number;
    totalImagesPerColumn: number;
}

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

const getImage = (colIndex: number, rowIndex: number) => {
    const column = BannerImages[colIndex % BannerImages.length];
    const validIndex = ((rowIndex % column.length) + column.length) % column.length;
    return column[validIndex];
};

const ScrollingColumn: React.FC<ScrollingColumnProps> = ({colIndex, totalImagesPerColumn}) => {
    return (
        <motion.div
            initial={{ y: colIndex % 2 === 0 ? "-50%" : "-100%" }}
            animate={{ y: colIndex % 2 === 0 ? "-100%" : "0%" }}
            transition={{
                duration: 100,
                ease: "linear",
                repeat: Infinity,
            }}
        >
            {Array.from({ length: totalImagesPerColumn + 6 }, (_, rowIndex) => {
                const { src, alt } = getImage(colIndex, rowIndex);
                return <ImageWrapper key={`${colIndex}-${rowIndex}`} src={src} alt={alt} />;
            })}
        </motion.div>
    );
};

export default ScrollingColumn;
