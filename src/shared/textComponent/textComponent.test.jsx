import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import TextComponent from './index';

test('Render result', () => {
  const { container, rerender } = render(<TextComponent number={ 4 } />);

  expect(container).toHaveTextContent('below');

  rerender(<TextComponent number={ 5 } />);
  expect(container).toHaveTextContent('equal');

  rerender(<TextComponent number={ 6 } />);
  expect(container).toHaveTextContent('more');
});
