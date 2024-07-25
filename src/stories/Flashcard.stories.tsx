import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Flashcard } from '../components/Flashcard';

export default {
  title: 'Flashcard',
  component: Flashcard,
  argTypes: {
    front: 'What is the capital of France?',
    back: 'Paris',
  },
} as Meta<typeof Flashcard>;

const Template: StoryFn<typeof Flashcard> = (args) => <Flashcard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  front: 'What is the capital of France?',
  back: 'Paris',
};
