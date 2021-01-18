import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './style';

const mapStateToProps = ({ user, posts }) => ({
  user,
  posts
});

@connect(mapStateToProps)
class Main extends React.Component {
  static propTypes = {

    /** Данные пользователя */
    user: PropTypes.shape({

      /** Имя */
      name: PropTypes.string.isRequired,

      /** Почта */
      email: PropTypes.string.isRequired

    }).isRequired

  };

  render() {
    const { user } = this.props;

    return (
      <div className={ styles.page }>
        Пользователь: ${ user.name }.
        Почта: ${ user.email }.
        <h1>
          Посты
        </h1>
      </div>
    );
  }
}

export default Main;
