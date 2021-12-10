import { handleAsyncActions, reducerUtils } from '../../lib/asyncUtils';
import {
  INIT_ACCOUNT,
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR,
  IMPORT_ACCOUNT,
  IMPORT_ACCOUNT_SUCCESS,
  IMPORT_ACCOUNT_ERROR,
  SET_PROFILE,
} from './constants';

const initialState = {
  account: reducerUtils.initial(),
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case INIT_ACCOUNT:
      return {
        ...state,
      };

    case CREATE_ACCOUNT:
    case CREATE_ACCOUNT_SUCCESS:
    case CREATE_ACCOUNT_ERROR:
      return handleAsyncActions(
        CREATE_ACCOUNT,
        'account',
        false,
      )(state, action);

    case IMPORT_ACCOUNT:
    case IMPORT_ACCOUNT_SUCCESS:
    case IMPORT_ACCOUNT_ERROR:
      return handleAsyncActions(
        IMPORT_ACCOUNT,
        'account',
        false,
      )(state, action);

    case SET_PROFILE: {
      const newData = {
        name: action.payload.name,
        password: action.payload.password,
        address: action.payload.address,
        avatar: action.payload.avatar,
        description: action.payload.description,
      };
      return {
        ...state,
        account: {
          data: newData,
          loading: false,
          error: null,
        },
      };
    }

    default:
      return state;
  }
}
