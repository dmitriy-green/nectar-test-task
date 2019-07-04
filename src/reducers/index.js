import { createReducer } from 'redux-starter-kit';
import * as actions from '../actions';

const initialState = {
  dropdownFilterName: '',
  displayingMoreFilters: false,
  selectedFilters: [],
  appliedFilters: []
};

export default createReducer(initialState, {
  [actions.openDropdown]: (state, action) => ({
    ...state,
    dropdownFilterName: state.dropdownFilterName === action.payload.filterName ? '' : action.payload.filterName,
    displayingMoreFilters: action.payload.closeMoreFilters ? false : state.displayingMoreFilters,
    selectedFilters: state.appliedFilters
  }),
  [actions.showMoreFilters]: (state) => ({
    ...state,
    displayingMoreFilters: !state.displayingMoreFilters,
    dropdownFilterName: ''
  }),
  [actions.cancelFilters]: (state, action) => ({
    ...state,
    selectedFilters: state.selectedFilters.filter(af => action.payload.every(f => f.id !== af.id))
  }),
  [actions.selectFilter]: (state, action) => ({
    ...state,
    selectedFilters: state.selectedFilters.findIndex(f => f.id === action.payload.id) === -1
      ? state.selectedFilters.concat(action.payload)
      : state.selectedFilters.filter(f => f.id !== action.payload.id)
  }),
  [actions.applyFilters]: (state) => ({
    ...state,
    appliedFilters: state.selectedFilters,
    dropdownFilterName: ''
  }),
  [actions.removeFilters]: (state, action) => {
    const appliedFilters = state.appliedFilters.filter(af => action.payload.every(f => f.id !== af.id));

    return {
    ...state,
      appliedFilters,
      selectedFilters: appliedFilters
    }
  }
})