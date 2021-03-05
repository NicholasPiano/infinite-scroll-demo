
const resourcesFetchSuccessReducer = (state = {}, action) => {
  const { resources } = action.payload;
  const indexed = resources.reduce(
    (acc, resource) => ({
      ...acc,
      [resource.id]: resource,
    }),
    {},
  );

  return {
    ...state,
    ...indexed,
  };
};

export default resourcesFetchSuccessReducer;
