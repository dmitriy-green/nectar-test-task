import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, className, onClick }) => (
  <button className={classnames(styles.button, className)} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;