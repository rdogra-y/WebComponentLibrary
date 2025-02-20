import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders text with correct content', () => {
  render(<Text content="Test Text" />);
  expect(screen.getByText('Test Text')).toBeInTheDocument();
});

test('text changes color when color prop is applied', () => {
  render(<Text content="Colored Text" color="blue" />);
  expect(screen.getByText('Colored Text')).toHaveStyle('color: blue');
});
