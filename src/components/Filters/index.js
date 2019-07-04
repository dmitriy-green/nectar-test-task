import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FilterItem from '../FilterItem';
import Button from '../Button';
import styles from './Filters.module.scss';
import Dropdown from '../Dropdown';
import * as constants from '../../constants';

class Filters extends PureComponent {
  getMoreFiltersKeyList() {
    const keys = Object.keys(this.props.filters);

    return keys.slice(constants.VISIBLE_FILTERS_QUANTITY_ON_MOBILE, keys.length);
  }

  renderFilterList(insideMoreFiltersDropdown) {
    const {
      filters, dropdownFilterName, selectedFilters, openDropdown, selectFilter, applyFilters, cancelFilters
    } = this.props;
    let list = insideMoreFiltersDropdown ? this.getMoreFiltersKeyList() : Object.keys(filters);
    const props = { dropdownFilterName, selectedFilters, openDropdown, selectFilter, applyFilters, cancelFilters };


    return list.map(name => (
      <li key={name} className={styles.listItem}>
        <FilterItem
          name={name}
          filter={filters[name]}
          insideMoreFilters={insideMoreFiltersDropdown}
          {...props}
        />
      </li>
    ));
  }

  render() {
    const { displayingMoreFilters, selectedFilters, filters } = this.props;
    const filterList = this.renderFilterList(false);
    const filterListInsideMoreFiltersDropdown = this.renderFilterList(true);
    const moreFiltersActive = this
      .getMoreFiltersKeyList()
      .reduce((acc, currVal) => acc.concat(filters[currVal]), [])
      .some(item => selectedFilters.some(s => s.id === item.id));

    return (
      <div>
        <ul className={styles.list}>
          {filterList}
          <li className={classnames(styles.listItem, styles.moreFilters)}>
            <Button
              onClick={() => this.props.showMoreFilters()}
              className={classnames(
                styles.moreFilters,
                { [styles.selected]: displayingMoreFilters, [styles.active]: moreFiltersActive }
              )}
            >
              More filters
            </Button>
            {displayingMoreFilters &&
            <Dropdown className='moreItemsDropdown'>
              <ul>
                {filterListInsideMoreFiltersDropdown}
              </ul>
            </Dropdown>}
          </li>
        </ul>
      </div>
    );
  };
}

Filters.propTypes = {
  filters: PropTypes.object,
  displayingMoreFilters: PropTypes.bool,
  selectedFilters: PropTypes.array,
  removeFilters: PropTypes.func,
  openDropdown: PropTypes.func,
  selectFilter: PropTypes.func,
  applyFilters: PropTypes.func,
  cancelFilter: PropTypes.func,
  showMoreFilters: PropTypes.func,
  cancelFilters: PropTypes.func
};

export default Filters