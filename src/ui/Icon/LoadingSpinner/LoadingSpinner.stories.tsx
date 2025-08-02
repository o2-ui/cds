import type { Meta, StoryObj } from '@storybook/react';

import LoadingSpinner from '.';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'ui/Icon/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    spin: {
      control: 'boolean',
      description: '회전 애니메이션 실행 여부를 설정합니다.',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
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
type Story = StoryObj<typeof LoadingSpinner>;

export const Preview: Story = {
  args: {
    spin: true,
  },
};
