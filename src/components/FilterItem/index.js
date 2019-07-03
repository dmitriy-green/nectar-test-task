import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import { openDropdown } from '../../actions';
import Dropdown from '../Dropdown';
import Button from '../Button';
import styles from './styles.module.scss';

class FilterItem extends PureComponent {
  render() {
    const { name, filter, dropdownFilterName, insideMoreFilters, openDropdown } = this.props;
    const selected = dropdownFilterName === name;

    return (
      <div className={styles.filterItem}>
        <Button
          className={classnames(styles.filterItemButton, { [styles.selected]: selected })}
          onClick={() => openDropdown({ filterName: name, closeMoreFilters: !insideMoreFilters })}
        >
          {name}
        </Button>
        {dropdownFilterName === name &&
        <Dropdown>
          <ul className={styles.subFilterItemsList}>
            {filter.map(subFilter => (
              <li key={subFilter.id} className={styles.subFilterItem}>
                <Button className={classnames(styles.subFilterItemButton)}>
                  {subFilter.title}
                </Button>
              </li>
            ))}
          </ul>
        </Dropdown>}
      </div>
    );
  }
}

FilterItem.propTypes = {
  name: PropTypes.string,
  filter: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  })),
  insideMoreFilters: PropTypes.bool,
  openDropdown: PropTypes.func
};

export default connect(
  (state) => ({
    dropdownFilterName: state.dropdownFilterName
  }),
  { openDropdown }
)(FilterItem);