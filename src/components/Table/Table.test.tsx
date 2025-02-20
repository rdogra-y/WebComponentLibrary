import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableHeader from './TableHeader';
import TableFooter from './TableFooter';

test('renders table with headers and cells', () => {
  render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Data 1</TableCell>
          <TableCell>Data 2</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );

  expect(screen.getByText('Header 1')).toBeInTheDocument();
  expect(screen.getByText('Data 2')).toBeInTheDocument();
  expect(screen.getByText('Footer')).toBeInTheDocument();
});
