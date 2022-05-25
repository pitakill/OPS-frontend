import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/Certificado de defunción internacional/i);
  expect(text).toBeInTheDocument();
});
