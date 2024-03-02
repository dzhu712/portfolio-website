import type { Meta, StoryObj } from '@storybook/react';

import { Image } from './Image';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Image',
  component: Image,
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
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    src: 'https://dzhu0.000webhostapp.com/images/hoops-teams.png',
    alt: 'Image of the HoopsTeams front page.',
  },
};

export const Small: Story = {
  args: {
    src: 'https://dzhu0.000webhostapp.com/images/hoops-teams.png',
    alt: 'Image of the HoopsTeams front page.',
    type: 'small',
  },
};

export const Round: Story = {
  args: {
    src: 'https://dzhu0.000webhostapp.com/images/hoops-teams.png',
    alt: 'Image of the HoopsTeams front page.',
    type: 'round',
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://dzhu0.000webhostapp.com/images/hoops-teams.png',
    alt: 'Image of the HoopsTeams front page.',
    disabled: true,
  },
};