import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import posts, { postsSaga } from './posts';
import account, { accountSaga } from './account';

const rootReducer = combineReducers({
  posts,
  account,
});

export function* rootSaga() {
  yield all([
    postsSaga(),
    accountSaga(),
  ]);
}

export default rootReducer;