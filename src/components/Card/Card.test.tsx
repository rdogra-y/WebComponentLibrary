import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  const mockOnClick = jest.fn();

  test('renders card with correct title and description', () => {
    render(<Card title="Test Title" description="Test Description" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('renders card with an image', () => {
    render(<Card title="Image Card" description="Card with Image" imageSrc="https://via.placeholder.com/300" />);
    const image = screen.getByAltText('Image Card');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/300');
  });

  test('calls onClick when clicked', () => {
    render(<Card title="Clickable Card" description="Click me" onClick={mockOnClick} />);
    fireEvent.click(screen.getByText('Clickable Card'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
