import { handleAsyncActions, reducerUtils } from '../../lib/asyncUtils';
import {
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_RERENDER,
  GET_POSTS_SUCCESS,
  INIT,
  SET_POST,
  SET_POST_ERROR,
  SET_POST_SUCCESS,
} from './constants';

const initialState = {
  posts: reducerUtils.initial(),
  check: reducerUtils.initial(''),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
      };

    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
    case GET_POSTS_RERENDER:
      return handleAsyncActions(GET_POSTS, 'posts', false)(state, action);

    case SET_POST:
    case SET_POST_SUCCESS:
    case SET_POST_ERROR:
      return handleAsyncActions(SET_POST, 'check', false)(state, action);

    default:
      return state;
  }
}
