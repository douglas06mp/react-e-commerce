import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shopSaga';
import { userSaga } from './user/userSaga';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSaga)]);
}
