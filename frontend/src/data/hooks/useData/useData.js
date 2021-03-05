
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import selectors from '../../selectors';
import useQuery from '../useQuery/useQuery';

const useData = ({ sort, page, size }) => {
  const [reset, setReset] = useState(false);
  const [queryIds, setQueryIds] = useState([]);
  const data = useSelector(selectors.pages)(queryIds);
  const { id, loading, meta = {} } = useQuery({ sort, page, size });

  useEffect(() => {
    if (!loading) {
      if (reset) {
        setReset(false);
        setQueryIds([id]);
      } else {
        setQueryIds(existingIds => {
          if (!existingIds.includes(id)) {
            return [...existingIds, id];
          }

          return existingIds;
        });
      }
    }
  }, [id, loading, setQueryIds, setReset]);

  useEffect(() => {
    setReset(true);
  }, [sort, setReset]);

  return {
    data,
    loading,
    meta,
  };
};

export default useData;
