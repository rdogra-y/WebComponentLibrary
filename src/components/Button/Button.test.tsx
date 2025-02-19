import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText('Test Button')).toBeInTheDocument();
});

test('button is disabled when disabled prop is true', () => {
  render(<Button label="Disabled" disabled />);
  expect(screen.getByText('Disabled')).toBeDisabled();
});
