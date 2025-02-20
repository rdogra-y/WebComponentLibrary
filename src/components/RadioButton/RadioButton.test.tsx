import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  const mockOnChange = jest.fn();

  test('renders radio button with label', () => {
    render(<RadioButton label="Test Option" value="test" name="test-group" onChange={mockOnChange} />);
    expect(screen.getByLabelText('Test Option')).toBeInTheDocument();
  });

  test('calls onChange when clicked', () => {
    render(<RadioButton label="Test Option" value="test" name="test-group" onChange={mockOnChange} />);
    fireEvent.click(screen.getByLabelText('Test Option'));
    expect(mockOnChange).toHaveBeenCalledWith('test');
  });

  test('disables radio button when disabled prop is true', () => {
    render(<RadioButton label="Disabled Option" value="disabled" name="test-group" onChange={mockOnChange} disabled />);
    expect(screen.getByLabelText('Disabled Option')).toBeDisabled();
  });
});
