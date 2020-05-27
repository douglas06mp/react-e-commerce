import { all, call, takeLatest, put } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS } from '../user/userActionType';
import { clearCart } from './cartAction';

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
