import type { Meta, StoryObj } from '@storybook/react';

import TestComponent from '.';

const meta: Meta<typeof TestComponent> = {
  title: 'ui/TestComponent',
  component: TestComponent,
  parameters: {
    layout: 'centered',
    description: {
      component: '테스트 컴포넌트 입니다.',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '제목을 입력하세요.',
    },
    description: {
      control: 'text',
      description: '설명을 입력하세요.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestComponent>;

export const Preview: Story = {
  args: {
    title: '테스트 컴포넌트',
    description: '이 컴포넌트는 테스트용으로 작성되었습니다.',
  },
};
