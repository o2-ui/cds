import type { Meta, StoryObj } from '@storybook/react';

import BackBtn from '.';

const meta: Meta<typeof BackBtn> = {
  title: 'ui/Icon/BackBtn',
  component: BackBtn,
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
type Story = StoryObj<typeof BackBtn>;

const PreviewExample = `<BackBtn className={'...'} />`;

export const Preview: Story = {
  parameters: {
    docs: {
      source: {
        code: PreviewExample,
        language: 'tsx',
      },
    },
  },
  args: {
    className: '',
  },
};
