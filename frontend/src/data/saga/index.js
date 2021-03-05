
import { takeEvery } from 'redux-saga/effects';

import { actionTypes } from '../constants';
import fetchSaga from './fetchSaga';

function* saga() {
  yield takeEvery(actionTypes.FETCH, fetchSaga);
}

export default saga;
