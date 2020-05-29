import { takeLatest, call, put, all } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from './shopActionType';
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.util';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopAction';

export function* onFetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsStartAsync);
}

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
    alert(error);
  }
}

export function* shopSaga() {
  yield all([call(onFetchCollectionsStart)]);
}
