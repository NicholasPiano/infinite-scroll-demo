
import { useState, useMemo, useCallback } from 'react';

import hooks from '../../data/hooks';
import { fields } from '../../constants';
import { LogTable, Statistics, StyledHeader } from './components';
import StyledApp from './App.style';

const App = () => {
  const [descending, setDescending] = useState(false);
  const [sort, setSort] = useState(fields.DATE);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const sortString = useMemo(() => {
    return `${descending ? '-' : ''}${sort}`;
  }, [descending, sort]);

  const { data, meta: { end }, loading } = hooks.useData({ sort: sortString, page, size });

  const handleSort = useCallback(newSort => {
    if (newSort === sort) {
      setDescending(value => !value);
    } else {
      setSort(newSort);
      setDescending(false);
    }
  }, [setDescending, sort]);

  return (
    <StyledApp>
      <StyledHeader>
        <Statistics data={data} />
      </StyledHeader>
      <LogTable
        data={data}
        end={end}
        loading={loading}
        descending={descending}
        sort={sort}
        setSort={handleSort}
        setPage={setPage}
      />
    </StyledApp>
  );
};

export default App;
