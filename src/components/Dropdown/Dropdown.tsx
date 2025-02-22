import React from 'react';
import styled from 'styled-components';

export type DropdownProps = {
  options: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
};

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
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
