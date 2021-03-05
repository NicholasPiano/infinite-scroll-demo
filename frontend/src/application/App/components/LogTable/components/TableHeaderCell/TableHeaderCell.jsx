
import { useMemo, useEffect } from 'react';
import { Table } from 'semantic-ui-react';

const TableHeaderCell = ({ descending, sort, field, setSort, children }) => {
  const handleSort = () => setSort(field);
  const sorted = useMemo(() => {
    if (sort === field) {
      return descending ? 'descending' : 'ascending';
    }

    return null;
  }, [field, descending, sort]);

  useEffect(() => {
    console.debug({ sorted, sort, field, descending });
  }, [sorted]);

  return (
    <Table.HeaderCell sorted={sorted} onClick={handleSort}>
      {children}
    </Table.HeaderCell>
  )
};

export default TableHeaderCell;
