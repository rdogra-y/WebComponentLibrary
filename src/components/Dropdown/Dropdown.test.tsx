import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const mockOnChange = jest.fn();

  test('renders dropdown with options', () => {
    render(<Dropdown options={options} onChange={mockOnChange} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('calls onChange when an option is selected', () => {
    render(<Dropdown options={options} onChange={mockOnChange} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Option 2' } });
    expect(mockOnChange).toHaveBeenCalledWith('Option 2');
  });

  test('disables dropdown when disabled prop is true', () => {
    render(<Dropdown options={options} onChange={mockOnChange} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});
