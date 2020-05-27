import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHECK_USER_SESSION,
} from './userActionType';

//SIGN IN
export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

//USER PERSISTENCE
export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});
