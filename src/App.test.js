import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio header text', () => {
  render(<App />);
  const headerText = screen.getByText(/khoa nguyen's portfolio website/i);
  expect(headerText).toBeInTheDocument();
});
