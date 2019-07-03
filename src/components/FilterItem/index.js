import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import { openDropdown } from '../../actions';
import Dropdown from '../Dropdown';
import Button from '../Button';
import styles from './styles.module.css';

const FilterItem = ({ name, filter, dropdownFilterName, openDropdown }) => (
  <div className={styles.filterItem}>
    <Button className={styles.filterItemButton} onClick={() => openDropdown(name)}>
      {name}
    </Button>
    {dropdownFilterName === name &&
      <Dropdown>
        <ul className={styles.subFilterItemsList}>
          {filter.map(subFilter => (
            <li className={styles.subFilterItem}>
              <Button className={classnames(styles.filterItemButton, styles.subFilterItemButton)}>
                {subFilter.title}
              </Button>
            </li>
          ))}
        </ul>
      </Dropdown>}
  </div>
);

FilterItem.propTypes = {
  name: PropTypes.string,
  filter: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  })),
  openDropdown: PropTypes.func
};

export default connect(
  (state) => ({
    dropdownFilterName: state.dropdownFilterName
  }),
  { openDropdown }
)(FilterItem);