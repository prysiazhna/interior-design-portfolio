// 'use client';
//
// import React from "react";
// import styled from "styled-components";
// import Image, { ImageProps } from "next/image";
//
// const StyledImageWrapper = styled.div<{ $maxWidth?: string }>`
//   position: relative;
//   width: 100%;
//   max-width: ${({ $maxWidth }) => $maxWidth || "600px"};
//   min-height: 150px; /* Встановлює мінімальну висоту для видимості */
//   aspect-ratio: 1;
//   border-radius: 8px;
//   overflow: hidden;
//
//   @media (max-width: 768px) {
//     max-width: 100%;
//   }
//
//   .custom-image {
//     object-fit: contain;
//     object-position: center;
//   }
// `;
//
// interface ImageWrapperProps extends Omit<ImageProps, "src" | "alt"> {
//     src: string;
//     alt: string;
//     maxWidth?: string;
// }
//
// const ImageWrapper: React.FC<ImageWrapperProps> = ({
//                                                        src,
//                                                        alt,
//                                                        maxWidth,
//                                                        quality = 90,
//                                                        priority = false,
//                                                        ...props
//                                                    }) => (
//     <StyledImageWrapper $maxWidth={maxWidth}>
//         <Image
//             src={src}
//             alt={alt}
//             fill
//             quality={quality}
//             priority={priority}
//             sizes="(max-width: 768px) 100vw, 50vw"
//             className="custom-image"
//             {...props}
//         />
//     </StyledImageWrapper>
// );
//
// export default ImageWrapper;
'use client';

import React from "react";
import styled from "styled-components";
import Image, { ImageProps } from "next/image";

const StyledImageWrapper = styled.div<{ $maxWidth?: string }>`
  position: relative;
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || "600px"};
  aspect-ratio: 1; 
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 150px;
  }

  .custom-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

interface ImageWrapperProps extends Omit<ImageProps, "src" | "alt"> {
    src: string;
    alt: string;
    maxWidth?: string;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
                                                       src,
                                                       alt,
                                                       maxWidth,
                                                       quality = 90,
                                                       priority = true,
                                                       ...props
                                                   }) => (
    <StyledImageWrapper $maxWidth={maxWidth}>
        <Image
            src={src}
            alt={alt}
            fill
            quality={quality}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="custom-image"
            {...props}
        />
    </StyledImageWrapper>
);

export default ImageWrapper;