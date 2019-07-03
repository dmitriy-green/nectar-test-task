import React from 'react';
import classnames from 'classnames';
import FilterItem from '../FilterItem';
import styles from './styles.module.css';

const Filters = ({ filters }) => {
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {Object.keys(filters).map(name => (
          <li key={name} className={styles.listItem}>
            <FilterItem name={name} filter={filters[name]}/>
          </li>
        ))}
        <li className={classnames(styles.listItem, styles.moreFilters)}>More filters</li>
      </ul>
    </div>
  );
};

export default Filters;