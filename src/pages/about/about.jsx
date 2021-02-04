import React, { useState } from 'react';
import { Link as LinkButton } from 'react-router5';
import { PAGES } from 'router';
import { TEST_CONST, ANOTHER_TEST_CONST } from 'constants';

import styles from './style';

const About = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={ styles.page }>
      <h1>
        About us
      </h1>

      <LinkButton routeName={ PAGES.MAIN }>
        Go to main
      </LinkButton>

      <button type="button" onClick={ () => setCount(count + 1) }>
        Click me!
      </button>
      <div id="counter">
        { count }
      </div>
      <div>
        { TEST_CONST }
      </div>
      <div>
        { ANOTHER_TEST_CONST }
      </div>
    </div>
  );
};

export default About;
