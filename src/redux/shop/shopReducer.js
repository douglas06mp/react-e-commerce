import { SET_COLLECTIONS } from './shopActionType';

const INIT_STATE = {
  collections: null,
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_COLLECTIONS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
