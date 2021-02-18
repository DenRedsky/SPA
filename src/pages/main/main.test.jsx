import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Main } from './main';

jest.mock('react-router5', () => ({ Link: component => <a href={ component.routeName }>{ component.children }</a> }));

const props = {
  user: {
    name: 'Denis',
    email: 'DenisKrasnovsky@gmail.com'
  },
  posts: [{
    title: 'test',
    body: 'This is test text'
  }]
};

test('Render result', () => {
  const { user, posts } = props;
  const { title, body } = posts[0];
  const { container } = render(<Main user={ user } posts={ posts } />);

  expect(container).toHaveTextContent(`User: ${ user.name }.`);
  expect(container).toHaveTextContent(`Email: ${ user.email }.`);
  expect(container).toHaveTextContent(`${ title }: ${ body }`);
});
