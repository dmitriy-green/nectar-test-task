import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import Dropdown from '../Dropdown';
import Button from '../Button';
import styles from './FilterItem.module.scss';

class FilterItem extends PureComponent {
  render() {
    const { name, filter, selectedFilters, dropdownFilterName, insideMoreFilters, openDropdown, selectFilter } = this.props;
    const selected = dropdownFilterName === name;
    const active = selectedFilters.some(s => filter.some(f => s.id === f.id));

    return (
      <div className={classnames(styles.filterItem, { [styles.selected]: selected })}>
        <Button
          className={classnames(
            styles.filterItemButton, { [styles.selected]: selected, [styles.active]: active })}
          onClick={() => openDropdown({ filterName: name, closeMoreFilters: !insideMoreFilters })}
        >
          {name}
        </Button>
        {dropdownFilterName === name && (
          <Dropdown>
            <ul className={styles.subFilterItemList}>
              {filter.map(subFilter => (
                <li key={subFilter.id} className={styles.subFilterItem}>
                  <Button
                    className={classnames(
                      styles.subFilterItemButton,
                      { [styles.active]: selectedFilters.some(s => s.id === subFilter.id) }
                    )}
                    onClick={() => selectFilter(subFilter)}
                  >
                    {subFilter.title}
                  </Button>
                </li>
              ))}
            </ul>
            <div className={styles.actions}>
              <Button onClick={() => this.props.applyFilters()}>Apply</Button>
              {active && <Button onClick={() => this.props.cancelFilters(filter)}>Cancel</Button>}
            </div>
          </Dropdown>
        )}
      </div>
    );
  }
}

FilterItem.propTypes = {
  dropdownFilterName: PropTypes.string,
  name: PropTypes.string,
  filter: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  })),
  insideMoreFilters: PropTypes.bool,
  selectedFilters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  })),
  openDropdown: PropTypes.func,
  selectFilter: PropTypes.func,
  cancelFilters: PropTypes.func,
  applyFilters: PropTypes.func
};

export default FilterItem