
import { actionTypes } from '../../../constants';
import resourcesFetchSuccessReducer from './resourcesFetchSuccessReducer';

const resourcesReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS:
      return resourcesFetchSuccessReducer(state, action);

    default:
      return state;
  }
};

export default resourcesReducer;
