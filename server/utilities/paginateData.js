
import isNaN from 'lodash/isNaN.js';
import isUndefined from 'lodash/isUndefined.js';

const paginateData = (data, pageString, sizeString) => {
  const pageValue = parseInt(pageString, 10);
  const page = isNaN(pageValue) ? 0 : pageValue;

  const sizeValue = parseInt(sizeString, 10);
  const size = isNaN(sizeValue) ? 10 : sizeValue;

  const firstPosition = page * size;
  const calculatedLastPosition = firstPosition + size;
  const lastPosition = calculatedLastPosition >= data.length ? data.length - 1 : calculatedLastPosition;
  const paginatedData = data.slice(firstPosition, lastPosition);

  const pages = Math.floor(data.length / size);
  const end = firstPosition >= data.length;

  return {
    data: paginatedData,
    page,
    size,
    pages,
    end,
  };
};

export default paginateData;
