
import { useCallback, useMemo, memo } from 'react';
import { Table, Visibility } from 'semantic-ui-react';
import isEmpty from 'lodash/isEmpty';

import StyledLogTable from './LogTable.style';

const LogTable = ({ data = [], end = false, loading = false, setPage }) => {
  const handleIncrementPage = useCallback(
    () => {
      if (!end) {
        setPage(page => page + 1);
      }
    },
    [setPage, end],
  );
  const dataRows = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.map((datum, index) => {
      const key = `${datum.date}.${index}`;

      return (
        <Table.Row key={key}>
          <Table.Cell>{datum.date}</Table.Cell>
          <Table.Cell>{datum.statusLabel}</Table.Cell>
          <Table.Cell>{datum.text}</Table.Cell>
        </Table.Row>
      );
    });
  }, [data]);
  const footer = useMemo(() => {
    if (isEmpty(data)) {
      return 'No data.';
    }

    if (end) {
      return 'No more data to load';
    }

    if (loading) {
      return 'Loading...';
    }

    return 'Scroll to load more data';
  }, [data, end, loading]);

  return (
    <StyledLogTable>
      <Visibility
        as={Table}
        once={false}
        onBottomVisible={handleIncrementPage}
        celled
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Text</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {dataRows}
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              {footer}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Visibility>
    </StyledLogTable>
  );
};

export default memo(LogTable);
