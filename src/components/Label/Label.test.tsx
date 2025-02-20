import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders label with correct text', () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText('Test Label')).toBeInTheDocument();
});

test('label changes color when color prop is applied', () => {
  render(<Label text="Colored Label" color="blue" />);
  expect(screen.getByText('Colored Label')).toHaveStyle('color: blue');
});
