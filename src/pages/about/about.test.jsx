import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import About from './about';

jest.mock('react-router5', () => ({ Link: component => <a href={ component.routeName }>{ component.children }</a> }));

test('Render result', () => {
  const { container } = render(<About />);

  expect(container).toHaveTextContent('About us');
  expect(container).toHaveTextContent('Go to main');
});

test('Counter', () => {
  const { container } = render(<About />);
  const button = getByTestId(container, 'increment_count_button');
  const count = getByTestId(container, 'count');

  expect(count).toHaveTextContent('0');
  userEvent.click(button);
  expect(count).toHaveTextContent('1');
});
