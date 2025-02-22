import React from 'react';
import styled from 'styled-components';

export type CardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
};

const StyledCard = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || '300px'};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin: 10px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  margin: 10px;
`;

const Card: React.FC<CardProps> = ({ title, description, imageSrc, width, height, onClick }) => {
  return (
    <StyledCard width={width} height={height} onClick={onClick}>
      {imageSrc && <img src={imageSrc} alt={title} style={{ width: '100%', height: 'auto' }} />}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </StyledCard>
  );
};

export default Card;
