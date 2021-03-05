
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import selectors from '../../selectors';
import useQuery from '../useQuery/useQuery';

const useData = ({ sort, page, size }) => {
  const [queryIds, setQueryIds] = useState([]);
  const data = useSelector(selectors.pages)(queryIds);
  const { id, loading, meta = {} } = useQuery({ sort, page, size });

  useEffect(() => {
    if (!loading) {
      setQueryIds(existingIds => [...existingIds, id]);
    }
  }, [id, loading, setQueryIds]);

  // useEffect(() => {
  //   setQueryIds([]);
  // }, [sort, setQueryIds]);

  return {
    data,
    loading,
    meta,
  };
};

export default useData;
