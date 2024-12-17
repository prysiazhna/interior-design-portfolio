'use client';

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
 

  &:hover .overlay {
    opacity: 1;
  }

  &:hover .button {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover{
    transform: scale(1.1);
  }
  
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
`;

const HoverButton = styled(Link)`
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 120px);
  opacity: 0;
  color: #fff;
  border: 1px white solid;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 35px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  z-index: 2;

  &:hover {
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
  }
`;

interface ProjectCardProps {
    id: string;
    imageSrc: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, imageSrc, description }) => {
    return (
        <CardWrapper>
            <ImageWrapper>
                <Image
                    src={imageSrc}
                    alt="Project Image"
                    width={300}
                    height={200}
                    priority={true}
                />
                <Overlay className="overlay" />
                <HoverButton href={`/project/${id}`} className="button">
                    View Project
                </HoverButton>
            </ImageWrapper>
        </CardWrapper>
    );
};

export default ProjectCard;
