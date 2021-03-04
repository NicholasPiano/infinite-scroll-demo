
import isUndefined from 'lodash/isUndefined.js';

import { fields } from '../constants.js';

const sortData = (data, parameter) => {
  if (isUndefined(parameter)) {
    return data;
  }

  const descending = parameter.startsWith('-');
  const field = descending ? parameter.slice(1) : parameter;

  if (!Object.values(fields).includes(field)) {
    return data;
  }

  const sortFunction = (
    {
      [field]: valueA,
    },
    {
      [field]: valueB,
    },
  ) => {
    if (valueA < valueB) {
      return descending ? 1 : -1;
    }

    if (valueA > valueB) {
      return descending ? -1 : 1;
    }

    return 0;
  };

  return data.sort(sortFunction);
};

export default sortData;
