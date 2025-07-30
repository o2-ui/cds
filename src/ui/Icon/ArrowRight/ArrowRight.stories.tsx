import type { Meta, StoryObj } from '@storybook/react';

import ArrowRight from '.';

const meta: Meta<typeof ArrowRight> = {
  title: 'ui/Icon/ArrowRight',
  component: ArrowRight,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    half: {
      control: 'boolean',
      description: '표준 너비를 절반으로 줄일지 여부를 설정합니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    thin: {
      control: 'boolean',
      description: '화살표의 두께를 지정합니다.',
      table: {
        defaultValue: { summary: 'false' },
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
type Story = StoryObj<typeof ArrowRight>;

export const Preview: Story = {
  args: {
    half: false,
    thin: false,
  },
};
