import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { Image } from '../Image';
import { Text } from '../Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Card',
  component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    image: <Image src="https://dzhu0.000webhostapp.com/images/hoops-teams.png" alt="Image of the HoopsTeams front page." />,
    title: <Text label="HoopsTeams" size="medium" bold />,
    description: <Text label="HoopsTeams is a Content Management System (CMS) for basketball teams. The system includes features for managing teams, leagues, comments, and user authentication." />,
  },
};

export const Secondary: Story = {
  args: {
    image: <Image src="https://dzhu0.000webhostapp.com/images/hoops-teams.png" alt="Image of the HoopsTeams front page." />,
    title: <Text label="HoopsTeams" size="medium" bold />,
    description: <Text label="HoopsTeams is a Content Management System (CMS) for basketball teams. The system includes features for managing teams, leagues, comments, and user authentication." />,
    secondary: true,
  },
};

export const Disabled: Story = {
  args: {
    image: <Image src="https://dzhu0.000webhostapp.com/images/hoops-teams.png" alt="Image of the HoopsTeams front page." />,
    title: <Text label="HoopsTeams" size="medium" bold />,
    description: <Text label="HoopsTeams is a Content Management System (CMS) for basketball teams. The system includes features for managing teams, leagues, comments, and user authentication." />,
    disabled: true,
  },
};