
const queriesFetchSuccessReducer = (state = {}, action) => {
  const { id, resources, meta } = action.payload;
  const { [id]: existingQuery } = state;

  return {
    ...state,
    [id]: {
      ...existingQuery,
      resources: resources.map(({ id: resourceId }) => resourceId),
      meta,
      loading: false,
    },
  };
};

export default queriesFetchSuccessReducer;
