import React from 'react';
import styled from 'styled-components';

export type ImgProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onClick?: () => void;
};

const StyledImage = styled.img<ImgProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.borderRadius || '0'};
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, borderRadius, onClick }) => {
  return <StyledImage src={src} alt={alt} width={width} height={height} borderRadius={borderRadius} onClick={onClick} />;
};

export default Img;
