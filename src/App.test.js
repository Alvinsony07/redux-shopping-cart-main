import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Aurora Cart brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/Aurora Cart/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders cart icon', () => {
  render(<App />);
  const cartBadge = screen.getByTestId('cart-badge');
  expect(cartBadge).toBeInTheDocument();
  expect(cartBadge).toHaveTextContent('0');
});
