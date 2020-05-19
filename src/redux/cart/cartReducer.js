import { TOGGLE_DROPDOWN } from './cartActionType';

const INIT_STATE = {
  hidden: true,
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
