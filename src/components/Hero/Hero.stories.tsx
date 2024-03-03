import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './Hero';
import { Text } from '../Text';
import { Button } from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Hero',
  component: Hero,
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
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    src: './src/assets/background.jpg',
    text: [
      <Text label="Hello, I'm Daniel Zhu." size='large' color='white' bold />,
      <Text label="I'm a Full-Stack Web Developer." size='large' color='white' bold />,
    ],
    button: <Button label='Contact Me' />,
  },
};

export const Disabled: Story = {
  args: {
    src: './src/assets/background.jpg',
    text: [
      <Text label="Hello, I'm Daniel Zhu." size='large' color='white' bold />,
      <Text label="I'm a Full-Stack Web Developer." size='large' color='white' bold />,
    ],
    button: <Button label='Contact Me' />,
    disabled: true,
  },
};
