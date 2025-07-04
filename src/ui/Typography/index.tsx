import type { ComponentProps, ElementType, ReactElement, ReactNode } from 'react';
import { memo } from 'react';

import style from './style.module.scss';
import { IResponsiveTextStyle, TextStyleType, WhiteSpaceType, WordBreakType } from './type';

import { mergeClassNames } from '@/util/string-helper';

const checkTextStyleType = (input: TextStyleType | IResponsiveTextStyle): input is TextStyleType => typeof input === 'string';

const getTextStyleClassName = (textStyle: TextStyleType | IResponsiveTextStyle) => {
  if (checkTextStyleType(textStyle)) {
    switch (textStyle) {
      case 'h1-b':
        return style['BaseTypography-H1-B'];
      case 'h1':
        return style['Typography-H1'];
      case 'h2-b':
        return style['Typography-H2-B'];
      case 'h2':
        return style['Typography-H2'];
      case 'h3-b':
        return style['Typography-H3-B'];
      case 'h3':
        return style['Typography-H3'];
      case 'h4-b':
        return style;
      case 'h4':
        return '';
      case 'h5-b':
        return '';
      case 'h5':
        return '';
      case 'h5':
        return '';
      case 'h5':
        return '';

      case 'h5':
        return '';
      case 'h5':
        return '';
      case 'h5':
        return '';
      case 'h5':
        return '';
      case 'h5':
        return '';
      case 'h5':
        return '';
      case 'h5':
        return '';
    }
  }
};

interface Props extends ComponentProps<'p'> {
  textStyle: TextStyleType | IResponsiveTextStyle;

  children?: ReactNode;
  className?: string;
  as?: ElementType;
  wordBreak?: WordBreakType;
  whiteSpace?: WhiteSpaceType;
}

const Typography = memo((props: Props): ReactElement => {
  const { textStyle, children, className, as = 'p', wordBreak = 'normal', whiteSpace = 'normal' } = props;

  const Component = as;
  return <Component className={mergeClassNames(className)}>{children}</Component>;
});

Typography.displayName = 'Typography';

export default Typography;
