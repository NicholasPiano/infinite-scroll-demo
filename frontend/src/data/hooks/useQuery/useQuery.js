
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../actions';
import selectors from '../../selectors';
import { createId } from './utilities';

const useQuery = ({ sort, page, size }) => {
  const dispatch = useDispatch();
  const id = createId({ sort, page, size });
  const query = useSelector(selectors.query)(id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      dispatch(actions.fetch({ id, sort, page, size }));
    }
  }, [id, dispatch]);

  useEffect(() => {
    setLoading(true);
  }, [id, setLoading]);

  useEffect(() => {
    setLoading(query && query.loading);
  }, [query, setLoading]);

  return {
    id,
    loading,
    ...query,
  };
};

export default useQuery;
