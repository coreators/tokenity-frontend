import { takeEvery } from 'redux-saga/effects';

import { createPromiseSaga } from '../../lib/asyncUtils';
import * as accountAPI from '../../api/wallet';
import {
  INIT_ACCOUNT,
  CREATE_ACCOUNT,
  IMPORT_ACCOUNT,
  SET_PROFILE,
  LOGOUT,
} from './constants';

export const init = () => ({ type: INIT_ACCOUNT });

export const createAccount = (data) => ({
  type: CREATE_ACCOUNT,
  payload: data,
});
export const importAccount = (data) => ({
  type: IMPORT_ACCOUNT,
  payload: data,
});
export const setProfile = (data) => ({ type: SET_PROFILE, payload: data });
export const logout = () => ({ type: LOGOUT });

const createAccountSaga = createPromiseSaga(CREATE_ACCOUNT, accountAPI.create);
const importAccountSaga = createPromiseSaga(
  IMPORT_ACCOUNT,
  accountAPI.importing,
);
// const setProfileSaga = createPromiseSaga(SET_PROFILE, accountAPI.setProfile);

export function* accountSaga() {
  yield takeEvery(CREATE_ACCOUNT, createAccountSaga);
  yield takeEvery(IMPORT_ACCOUNT, importAccountSaga);
  // yield takeEvery(SET_PROFILE, setProfileSaga);
}
