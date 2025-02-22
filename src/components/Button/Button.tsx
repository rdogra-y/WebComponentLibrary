import React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

// Ensure styled-components receives proper props
const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${({ disabled }) => (disabled ? '#ccc' : '#007BFF')};
  color: white;
  border-radius: 5px;
`;

const Button: React.FC<ButtonProps> = ({ label, disabled = false, onClick }) => {
  return <StyledButton disabled={disabled} onClick={onClick}>{label}</StyledButton>;
};

export default Button;
