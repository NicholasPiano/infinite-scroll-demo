
import range from 'lodash/range.js';
import lorem from 'lorem-ipsum';
const { loremIpsum } = lorem;

import { randomDate, randomInRange } from './utilities/index.js';

const status = {
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
};

const statusLabels = [status.INFO, status.WARNING, status.ERROR];

const generateDatum = () => {
  const date = randomDate().toISO();
  const statusLabel = statusLabels[randomInRange(0, statusLabels.length)];
  const text = loremIpsum();

  return { date, statusLabel, text };
};

export const data = range(100).map(generateDatum);
