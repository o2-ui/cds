import type { SVGProps } from 'react';

import Style from './style.module.scss';

import { mergeClassNames } from '@/util/string-helper';

const ARROW_RIGHT_PATH_D = {
  THIN: 'M12.4949 15.4949C12.2216 15.7683 11.7783 15.7683 11.505 15.4949L5.50498 9.49492C5.23161 9.22156 5.23161 8.77834 5.50498 8.50498C5.77834 8.23161 6.22156 8.23161 6.49493 8.50498L12 14.01L17.505 8.50498C17.7783 8.23161 18.2216 8.23161 18.4949 8.50498C18.7683 8.77834 18.7683 9.22156 18.4949 9.49493L12.4949 15.4949Z',
  BOLD: 'M12.6364 15.6363C12.2849 15.9878 11.7151 15.9878 11.3636 15.6363L5.36363 9.6363C5.01216 9.28483 5.01216 8.71498 5.36363 8.36351C5.7151 8.01203 6.28495 8.01203 6.63642 8.36351L12 13.7271L17.3636 8.36351C17.7151 8.01203 18.2849 8.01203 18.6364 8.36351C18.9879 8.71498 18.9879 9.28483 18.6364 9.6363L12.6364 15.6363Z',
} as const;

interface Props extends SVGProps<SVGSVGElement> {
  thin?: boolean;
}

/**
 * @author Jeff
 */
const ArrowUp = (props: Props) => {
  const { thin = false, className, role, 'aria-label': ariaLabel, ...rest } = props;

  return (
    <svg
      className={mergeClassNames(Style['Layout'], className)}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={role || 'img'}
      aria-label={ariaLabel || 'Up Arrow Icon'}
      {...rest}
    >
      <path fillRule={'evenodd'} clipRule={'evenodd'} d={thin ? ARROW_RIGHT_PATH_D['THIN'] : ARROW_RIGHT_PATH_D['BOLD']} fill={'currentColor'} />
    </svg>
  );
};

export default ArrowUp;
