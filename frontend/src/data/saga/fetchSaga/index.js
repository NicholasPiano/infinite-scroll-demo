
import { call } from 'redux-saga/effects';

import createResourceId from './createResourceId';
import fetchFromAPI from './fetchFromAPI';
import processFetchSuccess from './processFetchSuccess';

function* fetchSaga(action) {
  const { id, ...rest } = action.payload;

  const { data, meta } = yield call(fetchFromAPI, { ...rest });
  const resources = data.map(resource => {
    const resourceId = createResourceId(resource);

    return {
      id: resourceId,
      ...resource,
    };
  });

  yield call(processFetchSuccess, { id, resources, meta });
}

export default fetchSaga;
