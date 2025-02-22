import React from 'react';
import styled from 'styled-components';

export type LabelProps = {
  text: string;
  color?: string;
  size?: string;
  htmlFor?: string;
};

const StyledLabel = styled.label<{ color?: string; size?: string }>`
  color: ${({ color }) => color || 'black'};
  font-size: ${({ size }) => size || '14px'};
`;

const Label: React.FC<LabelProps> = ({ text, color, size, htmlFor }) => {
  return <StyledLabel color={color} size={size} htmlFor={htmlFor}>{text}</StyledLabel>;
};

export default Label;
