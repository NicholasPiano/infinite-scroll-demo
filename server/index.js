
import express from 'express';

import { paginateData, sortData } from './utilities/index.js';
import { data } from './data.js';

const app = express();
const port = 3001;

app.get('/api', (request, response) => {
  const { sort, page, size } = request.query;

  const sortedData = sortData(data, sort);
  const {
    page: calculatedPage,
    size: calculatedSize,
    pages,
    end,
    data: paginatedData,
  } = paginateData(sortedData, page, size);
  const payload = {
    data: paginatedData,
    meta: {
      page: calculatedPage,
      size: calculatedSize,
      pages,
      end,
    },
  };

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.json(payload);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
