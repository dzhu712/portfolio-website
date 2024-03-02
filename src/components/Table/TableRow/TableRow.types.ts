import { ReactElement } from 'react';
import { TableHeader } from '../TableHeader';
import { TableCell } from '../TableCell';
import { TableFooter } from '../TableFooter';

export type TableRowProps = {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Table cells in the table row
   */
  children: ReactElement<typeof TableHeader> | ReactElement<typeof TableCell> | ReactElement<typeof TableFooter> | ReactElement<typeof TableHeader>[] | ReactElement<typeof TableCell>[] | ReactElement<typeof TableFooter>[];
  /**
   * Whether the table row is disabled
   */
  disabled?: boolean;
};
