
import memoize from 'lodash/memoize';
import { createSelector } from 'reselect';

import dataSelector from './dataSelector';

const querySelector = createSelector(
  dataSelector,
  data => memoize(
    queryIds => queryIds.reduce(
      (acc, queryId) => {
        const query = data.queries[queryId];

        if (!query || !query.resources) {
          return acc;
        }

        const resources = query.resources.map(id => data.resources[id]);

        return [...acc, ...resources];
      },
      [],
    ),
    queryIds => queryIds.join(''),
  ),
);

export default querySelector;
