import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { TableRow } from './TableRow';
import { TableCell } from "../TableCell";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/TableRow',
  component: TableRow,
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
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: [
      <TableCell key="1" label="Table Cell 1" />,
      <TableCell key="2" label="Table Cell 2" />,
      <TableCell key="3" label="Table Cell 3" />,
    ],
  },
};

export const Disabled: Story = {
  args: {
    children: [
      <TableCell key="1" label="Table Cell 1" />,
      <TableCell key="2" label="Table Cell 2" />,
      <TableCell key="3" label="Table Cell 3" />,
    ],
    disabled: true,
  },
};
