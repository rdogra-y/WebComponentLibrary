import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

describe('Img Component', () => {
  const mockOnClick = jest.fn();

  test('renders image with correct src and alt', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Test Image" />);
    const image = screen.getByAltText('Test Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  test('triggers onClick when clicked', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Clickable Image" onClick={mockOnClick} />);
    const image = screen.getByAltText('Clickable Image');
    fireEvent.click(image);
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('applies borderRadius correctly', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Rounded Image" borderRadius="10px" />);
    const image = screen.getByAltText('Rounded Image');
    expect(image).toHaveStyle('border-radius: 10px');
  });
});
