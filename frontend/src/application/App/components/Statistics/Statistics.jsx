
import { useMemo } from 'react';

import { status } from '../../../../constants';
import { Status } from './components';
import StyledStatistics from './Statistics.style';

const Statistics = ({ data = [] }) => {
  const { info, warning, error } = useMemo(() => {
    return data.reduce(
      (acc, { statusLabel }) => ({
        info: statusLabel === status.INFO ? acc.info + 1 : acc.info,
        warning: statusLabel === status.WARNING ? acc.warning + 1 : acc.warning,
        error: statusLabel === status.ERROR ? acc.error + 1 : acc.error,
      }),
      { info: 0, warning: 0, error: 0 },
    );
  }, [data]);

  return (
    <StyledStatistics>
      <Status header="Info" meta={info} />
      <Status header="Warning" meta={warning} />
      <Status header="Error" meta={error} />
    </StyledStatistics>
  );
};

export default Statistics;
