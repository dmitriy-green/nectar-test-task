import { connect } from 'react-redux';
import { applyFilters, cancelFilters, openDropdown, removeFilters, selectFilter, showMoreFilters } from '../actions';
import Filters from '../components/Filters';
import filterOptionsData from '../zFilterOptions';

const mapStateToProps = (state) => {
  const { displayingMoreFilters, selectedFilters, appliedFilters, dropdownFilterName } = state;

  return { filters: filterOptionsData, displayingMoreFilters, selectedFilters, appliedFilters, dropdownFilterName };
};

const mapDispatchToProps = {
  removeFilters,
  openDropdown,
  selectFilter,
  applyFilters,
  cancelFilters,
  showMoreFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
