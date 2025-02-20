import React from 'react';
import styled from 'styled-components';

export type TableRowProps = {
  children: React.ReactNode;
};

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};

export default TableRow;
