
const queriesFetchReducer = (state = {}, action) => {
  const { id, sort, page, size } = action.payload;

  return {
    ...state,
    [id]: {
      sort,
      page,
      size,
      loading: true,
    },
  };
};

export default queriesFetchReducer;
