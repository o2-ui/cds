import type { Meta, StoryObj } from '@storybook/react';

import ArrowUp from '.';

const meta: Meta<typeof ArrowUp> = {
  title: 'ui/Icon/ArrowUp',
  component: ArrowUp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    thin: {
      control: 'boolean',
      required: false,
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
type Story = StoryObj<typeof ArrowUp>;

const PreviewExample = `<ArrowUp className={'...'} thin={false}/>`;
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
    thin: false,
    className: '',
  },
};
