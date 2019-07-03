import React from 'react';
import FilterItem from '../FilterItem'
import styles from './styles.module.css'

const Filters = ({ filters }) => (
  <ul className={styles.list}>
    {Object.keys(filters).map(name => (
      <li key={name} className={styles.listItem}>
        <FilterItem name={name} filter={filters[name]} />
      </li>
    ))}
  </ul>
);

export default Filters;