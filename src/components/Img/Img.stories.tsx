import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  render: (args) => <Img {...args} />,
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
    width: '150px',
    height: '150px',
    borderRadius: '8px',
  },
};

export const Clickable: Story = {
  render: (args) => <Img {...args} />,
  args: {
    src: 'https://via.placeholder.com/200',
    alt: 'Clickable Image',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    onClick: () => alert('Image Clicked!'),
  },
};
