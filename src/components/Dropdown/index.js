import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Dropdown.module.scss';

const Dropdown = ({ children, className }) => (
  <div className={classnames(styles.dropdown, className)}>{children}</div>
);

Dropdown.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Dropdown;
