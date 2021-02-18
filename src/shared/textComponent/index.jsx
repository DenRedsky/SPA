import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default function TextComponent({ number }) {
  let text = 'equal five';

  if (number > 5) {
    text = 'more than five';
  } else if (number < 5) {
    text = 'below five';
  }

  return <div className={ styles.text }>{ text }</div>;
}

TextComponent.propTypes = {
  /** Число, влияет на отображаемый текст  */
  number: PropTypes.number.isRequired
};
