import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'ui/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: false,
      description: '모듈화된 CSS 클래스명 (예: 색상, 배경색, 크기) 을 입력합니다.',
    },
    isChecked: {
      control: 'select',
      options: [true, false, undefined],
      description: 'true/false 설정 시 제어컴포넌트(부모요소가 상태제어) 로 동작합니다. 미설정 시, 내부적으로 상태를 제어합니다.',
    },
    disabled: {
      control: 'boolean',
      description: '이벤트 처리 제한 여부를 설정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Preview: Story = {
  args: {
    isChecked: undefined,
    disabled: false,
  },
};
