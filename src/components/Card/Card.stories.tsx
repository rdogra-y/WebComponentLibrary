import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => <Card {...args} />,
  args: {
    title: 'Sample Card',
    description: 'This is a sample card component.',
    imageSrc: 'https://via.placeholder.com/300',
    width: '300px',
  },
};

export const Clickable: Story = {
  render: (args) => <Card {...args} />,
  args: {
    title: 'Clickable Card',
    description: 'Clicking this card triggers an alert!',
    imageSrc: 'https://via.placeholder.com/300',
    width: '300px',
    onClick: () => alert('Card Clicked!'),
  },
};
