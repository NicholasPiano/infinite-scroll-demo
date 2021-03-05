
import { actionTypes } from '../constants';

const fetchAction = ({ id, sort, page, size }) => ({
  type: actionTypes.FETCH,
  payload: {
    id,
    sort,
    page,
    size,
  },
});

export default fetchAction;
