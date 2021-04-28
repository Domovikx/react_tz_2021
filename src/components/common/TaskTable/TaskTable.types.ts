import { useStyles } from './TaskTable.styles';

export interface Data {
  email: string;
  status: number;
  text: string;
  username: string;
  __v?: number;
  _id: string;
}

export type Order = 'asc' | 'desc';

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => void;

  order: Order;
  orderBy: string;
  rowCount: number;
}
