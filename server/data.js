
import range from 'lodash/range.js';
import lorem from 'lorem-ipsum';
const { loremIpsum } = lorem;

import { fields, status, statusLabels } from './constants.js';
import { paginateData, randomDate, randomInRange, sortData } from './utilities/index.js';

const generateDatum = () => {
  const date = randomDate().toISO();
  const statusLabel = statusLabels[randomInRange(0, statusLabels.length - 1)];
  const text = loremIpsum();

  return {
    [fields.DATE]: date,
    [fields.STATUS_LABEL]: statusLabel,
    [fields.TEXT]: text,
  };
};

export const data = range(100).map(generateDatum);
