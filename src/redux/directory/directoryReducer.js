import { DIRECTORY_DATA } from './directory.data';

const INIT_STATE = {
  directories: DIRECTORY_DATA,
};

const directoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
