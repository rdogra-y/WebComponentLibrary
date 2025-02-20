import React from 'react';
import styled from 'styled-components';

export type TableCellProps = {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
};

const StyledTableCell = styled.td<TableCellProps>`
  padding: 10px;
  text-align: ${(props) => props.align || 'left'};
`;

const TableCell: React.FC<TableCellProps> = ({ children, align }) => {
  return <StyledTableCell align={align}>{children}</StyledTableCell>;
};

export default TableCell;
