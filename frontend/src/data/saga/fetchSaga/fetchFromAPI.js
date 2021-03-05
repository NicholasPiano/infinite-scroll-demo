
import convertUrlParameters from './convertUrlParameters';
import parse from './parse';

const url = 'http://localhost:3001/api';

function fetchFromAPI(parameters) {
  const args = convertUrlParameters(parameters);
  const full = `${url}${args}`;

  return fetch(full).then(parse);
}

export default fetchFromAPI;
