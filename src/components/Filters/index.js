import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FilterItem from '../FilterItem';
import Button from '../Button';
import styles from './styles.module.scss';
import Dropdown from '../Dropdown';
import { connect } from 'react-redux';
import { showMoreFilters } from '../../actions';
import * as constants from '../../constants';

class Filters extends PureComponent {
  renderFilterList(insideMoreFilters) {
    const { filters } = this.props;
    let keys = Object.keys(filters);
    keys = insideMoreFilters ? keys.slice(constants.VISIBLE_FILTERS_QUANTITY_ON_MOBILE, keys.length) : keys;

    return keys.map(name => (
      <li key={name} className={styles.listItem}>
        <FilterItem
          name={name}
          filter={filters[name]}
          insideMoreFilters={insideMoreFilters}
        />
      </li>
    ));
  }

  render() {
    const { displayingMoreFilters } = this.props;
    const filterList = this.renderFilterList(false);
    const filterListInsideMoreFilters = this.renderFilterList(true);

    return (
      <div className={styles.wrap}>
        <ul className={styles.list}>
          {filterList}
          <li className={classnames(styles.listItem, styles.moreFilters)}>
            <Button onClick={() => this.props.showMoreFilters()}>More filters</Button>
            {displayingMoreFilters &&
            <Dropdown className='moreItemsDropdown'>
              <ul className={styles.moreFiltersList}>
                {filterListInsideMoreFilters}
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
  displayingMoreFilters: PropTypes.bool
};

export default connect(
  (state) => ({
    displayingMoreFilters: state.displayingMoreFilters
  }),
  {
    showMoreFilters
  }
)(Filters);