import React from 'react';
import styled from 'styled-components';

export type RadioButtonProps = {
  label: string;
  value: string;
  name: string;
  checked?: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
};

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const StyledInput = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, name, checked, onChange, disabled }) => {
  return (
    <StyledLabel disabled={disabled}>
      <StyledInput
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={() => onChange(value)}
        disabled={disabled}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
