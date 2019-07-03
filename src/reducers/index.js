import { createReducer } from 'redux-starter-kit';
import * as actions from '../actions';

const initialState = {
  dropdownFilterName: null,
  displayingMoreFilters: false
};

export default createReducer(initialState, {
  [actions.openDropdown]: (state, action) => ({
    ...state,
    dropdownFilterName: state.dropdownFilterName === action.payload.filterName ? null : action.payload.filterName,
    displayingMoreFilters: action.payload.closeMoreFilters ? false : state.displayingMoreFilters
  }),
  [actions.showMoreFilters]: (state) => ({
    ...state,
    displayingMoreFilters: !state.displayingMoreFilters,
    dropdownFilterName: false
  })
})