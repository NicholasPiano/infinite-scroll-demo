
import { useState } from 'react';

import hooks from '../../data/hooks';
import { fields } from '../../constants';
import { LogTable, Statistics, StyledHeader } from './components';
import StyledApp from './App.style';

const App = () => {
  const [sort, setSort] = useState(fields.DATE);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const { data, meta: { end }, loading } = hooks.useData({ sort, page, size });

  return (
    <StyledApp>
      <StyledHeader>
        <Statistics data={data} />
      </StyledHeader>
      <LogTable data={data} end={end} loading={loading} />
    </StyledApp>
  );
};

export default App;
