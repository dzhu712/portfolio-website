import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Input',
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    id: "name",
    name: "name",
    placeholder: "Name",
  },
};

export const Email: Story = {
  args: {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Email Address",
  },
};

export const Textarea: Story = {
  args: {
    id: "message",
    name: "message",
    type: "textarea",
    placeholder: "Message",
  },
};

export const Disabled: Story = {
  args: {
    id: "name",
    name: "name",
    placeholder: "Name",
    disabled: true,
  },
};
