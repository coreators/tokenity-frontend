import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import posts, { postsSaga } from './posts';

const rootReducer = combineReducers({
  posts,
});

export function* rootSaga() {
  yield all([
    postsSaga(),
  ]);
}

export default rootReducer;