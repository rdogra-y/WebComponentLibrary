import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  render: (args) => <HeroImage {...args} />,
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero Image',
    height: '400px',
    overlayText: 'Welcome to Our Website',
  },
};

export const NoText: Story = {
  render: (args) => <HeroImage {...args} />,
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero Image Without Text',
    height: '400px',
    overlayText: '',
  },
};
