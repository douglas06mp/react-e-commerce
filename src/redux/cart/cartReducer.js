import { TOGGLE_DROPDOWN, ADD_ITEM } from './cartActionType';
import { addItemToCart } from './cart.util';

const INIT_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case TOGGLE_DROPDOWN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
