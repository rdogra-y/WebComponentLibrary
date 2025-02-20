import React from 'react';
import styled from 'styled-components';

export type TableHeaderProps = {
  children: React.ReactNode;
};

const StyledTableHeader = styled.thead`
  background-color: #f4f4f4;
  font-weight: bold;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

export default TableHeader;
