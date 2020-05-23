import { SET_COLLECTIONS } from './shopActionType';
import { SHOP_DATA } from './shop.data';

const INIT_STATE = {
  collections: SHOP_DATA,
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
