import React from 'react';
import styled from 'styled-components';

export type LabelProps = {
  text: string;
  color?: string;
  size?: string;
  htmlFor?: string;
};

const StyledLabel = styled.label<LabelProps>`
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || '#000'};
  display: block;
  margin-bottom: 5px;
`;

const Label: React.FC<LabelProps> = ({ text, color, size, htmlFor }) => {
  return <StyledLabel color={color} size={size} htmlFor={htmlFor}>{text}</StyledLabel>;
};

export default Label;
