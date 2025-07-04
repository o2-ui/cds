type TextStyleType =
  | 'h1-b'
  | 'h1'
  | 'h2-b'
  | 'h2'
  | 'h3-b'
  | 'h3'
  | 'h4-b'
  | 'h4'
  | 'h5-b'
  | 'h5'
  | 'h6-b'
  | 'p1-b'
  | 'p1-sb'
  | 'p1'
  | 'p2-b'
  | 'p2-sb'
  | 'p2'
  | 'p3-b'
  | 'p3-sb'
  | 'p3'
  | 'caption-b'
  | 'caption-sb'
  | 'caption';

type WhiteSpaceType = 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces' | 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer';

type WordBreakType = 'normal' | 'break-all' | 'keep-all' | 'break-word' | 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer';

interface IResponsiveTextStyle {
  base: TextStyleType;
  mobile?: TextStyleType;
  tablet?: TextStyleType;
  laptop?: TextStyleType;
  desktop?: TextStyleType;
}

export type { TextStyleType, WhiteSpaceType, WordBreakType, IResponsiveTextStyle };
