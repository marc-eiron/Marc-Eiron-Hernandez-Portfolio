import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'Marc' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: 'Software Engineer' })).toBeInTheDocument();
});

test('renders main navigation sections', () => {
  render(<App />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
});
