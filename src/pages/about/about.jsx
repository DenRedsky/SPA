import React from 'react';
import { Link as LinkButton } from 'react-router5';
import { PAGES } from 'router';
import { TEST_CONST, ANOTHER_TEST_CONST } from 'constants';

import styles from './style';

const About = () => (
  <div className={ styles.page }>
    <h1>
      About us
    </h1>

    <LinkButton routeName={ PAGES.MAIN }>
      Go to main
    </LinkButton>

    <div>
      { TEST_CONST }
    </div>
    <div>
      { ANOTHER_TEST_CONST }
    </div>
  </div>
);

export default About;
