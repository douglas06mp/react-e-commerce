import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, next) => acc + next.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, next) => acc + next.quantity * next.price, 0)
);
