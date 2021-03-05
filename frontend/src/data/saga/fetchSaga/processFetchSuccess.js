
import { put } from 'redux-saga/effects';

import actions from '../../actions';

function* processFetchSuccess({ id, resources, meta }) {
  yield put(actions.fetchSuccess({ id, resources, meta }));
}

export default processFetchSuccess;
