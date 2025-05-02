import { render, screen } from '@testing-library/react';
import Menu from '../Menu';

test('renders menu heading', () => {
  render(<Menu />);
  const heading = screen.getByText(/Menu/i);
  expect(heading).toBeInTheDocument();
});