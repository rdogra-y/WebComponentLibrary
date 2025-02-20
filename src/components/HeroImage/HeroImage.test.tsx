import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('renders hero image with overlay text', () => {
    render(<HeroImage src="https://via.placeholder.com/1200x400" alt="Test Hero Image" overlayText="Test Overlay" />);
    const heroText = screen.getByText('Test Overlay');
    expect(heroText).toBeInTheDocument();
  });

  test('renders hero image without overlay text', () => {
    render(<HeroImage src="https://via.placeholder.com/1200x400" alt="Test Hero Image Without Text" />);
    const heroText = screen.queryByText('Test Overlay');
    expect(heroText).not.toBeInTheDocument();
  });

  test('sets correct alt attribute', () => {
    render(<HeroImage src="https://via.placeholder.com/1200x400" alt="Accessible Hero Image" />);
    const heroContainer = screen.getByLabelText('Accessible Hero Image');
    expect(heroContainer).toBeInTheDocument();
  });
});
