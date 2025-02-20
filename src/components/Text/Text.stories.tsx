import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    color: { control: 'color' },
    size: { control: 'text' },
    weight: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { content: 'Default Text', color: '#333', size: '16px', weight: 'normal' },
};

export const LargeText: Story = {
  args: { content: 'Large Text', color: '#007BFF', size: '24px', weight: 'bold' },
};

export const RedText: Story = {
  args: { content: 'Red Text', color: 'red', size: '18px', weight: 'medium' },
};
