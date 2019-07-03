import { connect } from 'react-redux';
import { removeFilters } from '../actions';
import AppliedFilters from '../components/AppliedFilters';

const mapStateToProps = (state) => {
  const { appliedFilters } = state;

  return { appliedFilters };
};

const mapDispatchToProps = {
  removeFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(AppliedFilters)
