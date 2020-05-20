import {
  TOGGLE_DROPDOWN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM,
} from './cartActionType';
import { addItemToCart, removeItemFromCart } from './cart.util';

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
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case TOGGLE_DROPDOWN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
