import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    size: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { text: 'Label Text', color: '#333', size: '16px' },
};

export const LargeLabel: Story = {
  args: { text: 'Large Label', color: '#007BFF', size: '24px' },
};

export const RedLabel: Story = {
  args: { text: 'Red Label', color: 'red', size: '18px' },
};
