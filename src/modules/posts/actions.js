import { takeEvery } from 'redux-saga/effects';

import { createPromiseSaga } from '../../lib/asyncUtils';
import * as postsAPI from '../../api/posts';
import { GET_POSTS, SET_POST, INIT } from './constants';

export const init = () => ({ type: INIT });

export const getPosts= (data) => ({ type: GET_POSTS, payload: data });
export const setPost= (data) => ({ type: SET_POST, payload: data });

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const setPostSaga = createPromiseSaga(SET_POST, postsAPI.setPost);

export function* postsSaga(){
    yield takeEvery(GET_POSTS, getPostsSaga);
    yield takeEvery(SET_POST, setPostSaga);
}