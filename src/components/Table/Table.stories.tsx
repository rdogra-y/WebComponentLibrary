import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table border="1px solid #000">
      <TableHeader>
        <TableRow>
          <TableCell align="center">Header 1</TableCell>
          <TableCell align="center">Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Data 1</TableCell>
          <TableCell>Data 2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Data 3</TableCell>
          <TableCell>Data 4</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell align="center" colSpan={2}>Footer</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
