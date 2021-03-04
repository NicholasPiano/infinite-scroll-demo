
import { useMemo, memo } from 'react';
import { Table } from 'semantic-ui-react';
import isEmpty from 'lodash/isEmpty';

const LogTable = ({ data = [], end = false, loading = false }) => {
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
  }, [end]);

  return (
    <Table celled>
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
    </Table>
  );
};

export default memo(LogTable);
