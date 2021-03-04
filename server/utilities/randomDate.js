
import luxon from 'luxon';
const { DateTime } = luxon;

import randomInRange from './randomInRange.js';

const randomDate = () => {
  const now = DateTime.local();
  const weekInMilliseconds = 604800000;
  const randomMilliseconds = randomInRange(0, weekInMilliseconds);
  const date = now.minus(randomMilliseconds);

  return date;
};

export default randomDate;
