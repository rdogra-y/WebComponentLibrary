import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => <Dropdown {...args} />,
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => <Dropdown {...args} />,
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabled: true,
  },
};
