import { ReactElement } from 'react';
import { TableRow } from './TableRow';

export type TableProps = {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Table rows in the table
   */
  children: ReactElement<typeof TableRow> | ReactElement<typeof TableRow>[];
  /**
   * Whether the table is disabled
   */
  disabled?: boolean;
};
