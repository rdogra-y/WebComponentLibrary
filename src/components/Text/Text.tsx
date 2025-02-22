import React from 'react';
import styled from 'styled-components';

export type TextProps = {
  content: string;
  color?: string;
  size?: string;
  weight?: string;
};

const StyledText = styled.p<{ color?: string; size?: string; weight?: string }>`
  color: ${({ color }) => color || 'black'};
  font-size: ${({ size }) => size || '16px'};
  font-weight: ${({ weight }) => weight || 'normal'};
`;

const Text: React.FC<TextProps> = ({ content, color, size, weight }) => {
  return <StyledText color={color} size={size} weight={weight}>{content}</StyledText>;
};

export default Text;
