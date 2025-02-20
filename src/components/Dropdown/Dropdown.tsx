import React from 'react';
import styled from 'styled-components';

export type DropdownProps = {
  options: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
};

const StyledSelect = styled.select<DropdownProps>`
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? '#f0f0f0' : 'white')};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, disabled = false }) => {
  return (
    <StyledSelect onChange={(e) => onChange(e.target.value)} disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
