
import memoize from 'lodash/memoize';
import { createSelector } from 'reselect';

import dataSelector from './dataSelector';

const querySelector = createSelector(
  dataSelector,
  data => memoize(
    queryId => data.queries[queryId],
  )
);

export default querySelector;
