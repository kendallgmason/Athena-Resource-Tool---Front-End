import { render, screen } from '@testing-library/react';
import App from '.';

test('renders the landing page and checks for roles', () => {
  render(<App />);
  expect(screen.getByRole("img")).toBeInTheDocument();
});

test('renders Athena Title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Athena/i);
  expect(titleElement).toBeInTheDocument();
});






