import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './AppliedFilters.module.scss';

class AppliedFilters extends PureComponent {
  renderAppliedFilterListItems() {
    const { appliedFilters, removeFilters } = this.props;

    return appliedFilters.map(item => (
      <li key={item.id} className={styles.item}>
        <span className={styles.title}>{item.title}</span>
        <button className={styles.removeFilter} onClick={() => removeFilters([item])}>X</button>
      </li>
    ));
  }

  render() {
    const items = this.renderAppliedFilterListItems();
    const { appliedFilters, removeFilters } = this.props;

    return (
      <div className={styles.appliedFilters}>
        <span className={styles.description}>Applied Filters: </span>
        {items.length === 0
          ? <span className={styles.noneText}>- none -</span>
          : (
            <React.Fragment>
              <ul className={styles.list}>
                {items}
              </ul>
              <Button className={styles.button} onClick={() => removeFilters(appliedFilters)}>Clear All</Button>
            </React.Fragment>
          )
        }
      </div>
    );
  }
}

AppliedFilters.propTypes = {
  appliedFilters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  })),
  removeFilters: PropTypes.func
};

export default AppliedFilters;