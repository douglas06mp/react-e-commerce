import { SET_COLLECTIONS } from './shopActionType';

export const setCollections = (collections) => ({
  type: SET_COLLECTIONS,
  payload: collections,
});
