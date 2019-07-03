import React from 'react';
import styles from './styles.module.css'

const FilterItem = ({ name }) => (
  <div className={styles.filterItem}>{name}</div>
);

export default FilterItem;