import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  auth,
  googleAuthProvider,
  createUserProfileDocument,
} from '../../firebase/firebase.util';
import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from './userActionType';
import { signInSuccess, signInFailure } from './userAction';

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleAuthProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
    alert(error);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
    alert(error);
  }
}

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
    alert(error);
  }
}

export function* userSaga() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
