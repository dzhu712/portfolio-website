import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';
import { TableRow } from './TableRow';
import { TableHeader } from './TableHeader';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: [
      <TableRow>
        <TableHeader key="1" label="Table Header 1" />
        <TableHeader key="2" label="Table Header 2" />
        <TableHeader key="3" label="Table Header 3" />
      </TableRow>,
      <TableRow>
        <TableCell key="1" label="Table Cell 1" />
        <TableCell key="2" label="Table Cell 2" />
        <TableCell key="3" label="Table Cell 3" />
      </TableRow>,
      <TableRow>
        <TableCell key="4" label="Table Cell 4" />
        <TableCell key="5" label="Table Cell 5" />
        <TableCell key="6" label="Table Cell 6" />
      </TableRow>,
      <TableRow>
        <TableCell key="7" label="Table Cell 7" />
        <TableCell key="8" label="Table Cell 8" />
        <TableCell key="9" label="Table Cell 9" />
      </TableRow>,
      <TableRow>
        <TableFooter key="1" label="Table Footer 1" />
      </TableRow>,
    ],
  },
};

export const Disabled: Story = {
  args: {
    children: [
      <TableRow>
        <TableHeader key="1" label="Table Header 1" />
        <TableHeader key="2" label="Table Header 2" />
        <TableHeader key="3" label="Table Header 3" />
      </TableRow>,
      <TableRow>
        <TableCell key="1" label="Table Cell 1" />
        <TableCell key="2" label="Table Cell 2" />
        <TableCell key="3" label="Table Cell 3" />
      </TableRow>,
      <TableRow>
        <TableCell key="4" label="Table Cell 4" />
        <TableCell key="5" label="Table Cell 5" />
        <TableCell key="6" label="Table Cell 6" />
      </TableRow>,
      <TableRow>
        <TableCell key="7" label="Table Cell 7" />
        <TableCell key="8" label="Table Cell 8" />
        <TableCell key="9" label="Table Cell 9" />
      </TableRow>,
      <TableRow>
        <TableFooter key="1" label="Table Footer 1" />
      </TableRow>,
    ],
    disabled: true,
  },
};