import { SET_USER } from './userActionType';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
