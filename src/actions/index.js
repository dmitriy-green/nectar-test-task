import { createAction } from 'redux-starter-kit';

export const openDropdown = createAction('openDropdown');
export const showMoreFilters = createAction('showMoreFilters');
export const selectFilter = createAction('selectFilter');
export const applyFilters = createAction('applyFilters');
export const cancelFilters = createAction('cancelFilters');
export const removeFilters = createAction('removeFilters');

