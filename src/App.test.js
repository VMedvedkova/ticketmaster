import { render, screen } from '@testing-library/react';
import App from './App'
import {expect, test} from '@jest/globals'

test("Music events Heading present", () => {
  render(<App />);
  const headingelement = screen.getByText(/Music events/i);
  expect(headingelement).toBeInTheDocument();
});
