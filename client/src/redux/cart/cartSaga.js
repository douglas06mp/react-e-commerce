import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { getUserCartRef } from '../../firebase/firebase.util';
import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../user/userActionType';
import { selectCurrentUser } from '../user/userSelector';
import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM } from './cartActionType';
import { selectCartItems } from './cartSelector';
import { clearCart, setCartFromFirebase } from './cartAction';

//CLEAR CART WHEN USER SIGN ON
export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

//ACCESS CART FOR THE USER IN FIREBASE WHEN USER SIGN IN
export function* onSignInSuccess() {
  yield takeLatest(SIGN_IN_SUCCESS, getCartFromFirebase);
}

export function* getCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  const cartItems = cartSnapshot.data().cartItems;
  yield put(setCartFromFirebase(cartItems));
}

//UPDATE CART IN FIREBASE
export function* onUpdateCart() {
  yield takeLatest([ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM], updateCartInFirebase);
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      cartRef.update({ cartItems });
    } catch (error) {
      alert(error);
    }
  }
}

//EXPORT
export function* cartSaga() {
  yield all([
    call(onSignOutSuccess),
    call(onUpdateCart),
    call(onSignInSuccess),
  ]);
}
