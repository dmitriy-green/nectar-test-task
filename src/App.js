import React from 'react';
import Filters from './containers/FiltersContainer';
import AppliedFilters from './containers/AppliedFiltersContainer';
import logo from './logo.svg';
import styles from './App.module.scss';
import './reset.css'

const App = () => (
  <div className={styles.app}>
    <header>
      <img src={logo} className={styles.logoImage} alt="logo" />
      <span className={styles.logoText}>Logo</span>
    </header>
    <Filters />
    <AppliedFilters />
  </div>
);

export default App;
