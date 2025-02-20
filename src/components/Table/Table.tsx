import React from 'react';
import styled from 'styled-components';

export type TableProps = {
  children: React.ReactNode;
  border?: string;
  width?: string;
};

const StyledTable = styled.table<TableProps>`
  width: ${(props) => props.width || '100%'};
  border-collapse: collapse;
  border: ${(props) => props.border || '1px solid #ddd'};
`;

const Table: React.FC<TableProps> = ({ children, border, width }) => {
  return <StyledTable border={border} width={width}>{children}</StyledTable>;
};

export default Table;
