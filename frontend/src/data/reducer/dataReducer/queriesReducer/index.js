
import { actionTypes } from '../../../constants';
import queriesFetchReducer from './queriesFetchReducer';
import queriesFetchSuccessReducer from './queriesFetchSuccessReducer';

const queriesReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH:
      return queriesFetchReducer(state, action);

    case actionTypes.FETCH_SUCCESS:
      return queriesFetchSuccessReducer(state, action);

    default:
      return state;
  }
};

export default queriesReducer;
