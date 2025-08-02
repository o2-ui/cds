import type { Meta, StoryObj } from '@storybook/react';

import Check from '.';

const meta: Meta<typeof Check> = {
  title: 'ui/Icon/Check',
  component: Check,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: false,
      required: false,
      description: '모듈화된 CSS 클래스명 (예: 색상, 배경색, 크기) 을 입력합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Check>;

export const Preview: Story = {};
