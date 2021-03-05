
import { actionTypes } from '../constants';

const fetchSuccessAction = ({ id, resources, meta }) => ({
  type: actionTypes.FETCH_SUCCESS,
  payload: {
    id,
    resources,
    meta,
  },
});

export default fetchSuccessAction;
