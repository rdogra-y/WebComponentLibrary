import React from 'react';
import styled from 'styled-components';

export type TextProps = {
  content: string;
  color?: string;
  size?: string;
  weight?: string;
};

const StyledText = styled.p<TextProps>`
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || '#000'};
  font-weight: ${(props) => props.weight || 'normal'};
`;

const Text: React.FC<TextProps> = ({ content, color, size, weight }) => {
  return <StyledText color={color} size={size} weight={weight}>{content}</StyledText>;
};

export default Text;
