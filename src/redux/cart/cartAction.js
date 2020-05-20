import { TOGGLE_DROPDOWN, ADD_ITEM, CLEAR_ITEM } from './cartActionType';

export const addItem = (item) => ({ type: ADD_ITEM, payload: item });

export const clearItem = (item) => ({ type: CLEAR_ITEM, payload: item });

export const toggleDropdown = () => ({ type: TOGGLE_DROPDOWN });
