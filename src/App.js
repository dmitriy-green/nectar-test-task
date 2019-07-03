import React from 'react';
import Filters from './components/Filters';
import logo from './logo.svg';
import styles from './App.module.css';
import './reset.css'
import filterOptionsData from './zFilterOptions';

const App = () => (
  <div className={styles.app}>
    <header>
      <img src={logo} className={styles.logoImage} alt="logo" />
      <span className={styles.logoText}>Logo</span>
    </header>
    <Filters filters={filterOptionsData} />
  </div>
);

export default App;
