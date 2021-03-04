
import { useState } from 'react';

import { fields } from '../../constants';
import { LogTable, Statistics, StyledHeader } from './components';
import StyledApp from './App.style';

const App = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [sort, setSort] = useState(fields.DATE);

  const data = [];
  const end = false;

  return (
    <StyledApp>
      <StyledHeader>
        <Statistics data={data} />
      </StyledHeader>
      <LogTable data={data} end={end} />
    </StyledApp>
  );
};

export default App;
