import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders', () => {
  const { getByText } = render(<App />);
  const listName = getByText(/Grocery List/i);
  expect(listName).toBeInTheDocument();
});
