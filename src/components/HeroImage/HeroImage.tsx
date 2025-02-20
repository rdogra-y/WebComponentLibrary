import React from 'react';
import styled from 'styled-components';

export type HeroImageProps = {
  src: string;
  alt: string;
  height?: string;
  overlayText?: string;
};

const HeroContainer = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || '300px'};
  background: url(${(props) => props.src}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, height, overlayText }) => {
  return <HeroContainer src={src} height={height} aria-label={alt}>{overlayText}</HeroContainer>;
};

export default HeroImage;
