import { createReducer } from 'redux-starter-kit'
import * as actions from '../actions'

const initialState = {
  dropdownFilterName: null
};

export default createReducer(initialState, {
  [actions.openDropdown]: (state, action) => ({
    ...state,
    dropdownFilterName: action.payload
  })
})