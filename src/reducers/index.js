import { createReducer } from 'redux-starter-kit'
import * as actions from '../actions'

const initialState = {
  filterPopupId: null
};

export default createReducer(initialState, {
  [actions.showFilterPopup]: (state, action) => ({
    ...state,
    filterPopupId: action.payload
  })
})