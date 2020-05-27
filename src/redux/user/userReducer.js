import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './userActionType';

const INIT_STATE = {
  user: null,
  error: null,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case SIGN_IN_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
