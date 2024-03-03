import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Link',
  component: Link,
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
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    href: "#",
    label: "Daniel Dev",
  },
};

export const Large: Story = {
  args: {
    href: "#",
    label: "Daniel Dev",
    large: true,
  },
};

export const Blue: Story = {
  args: {
    href: "#",
    label: "Daniel Dev",
    blue: true,
  },
};

export const Bold: Story = {
  args: {
    href: "#",
    label: "Daniel Dev",
    bold: true,
  },
};

export const Disabled: Story = {
  args: {
    href: "#",
    label: "Daniel Dev",
    disabled: true,
  },
};
