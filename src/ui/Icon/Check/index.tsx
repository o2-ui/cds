import type { SVGProps } from 'react';

import Style from './style.module.scss';

import { mergeClassNames } from '@/util/string-helper';

/**
 * @author Jeff
 */
const Check = (props: SVGProps<SVGSVGElement>) => {
  const { className, role, 'aria-label': ariaLabel, ...rest } = props;

  return (
    <svg
      className={mergeClassNames(Style['Check'], className)}
      xmlns={'http://www.w3.org/2000/svg'}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={'0 0 24 24'}
      role={role ?? 'img'}
      aria-label={ariaLabel || 'Check Icon'}
      fill={'none'}
      {...rest}
    >
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M3.4236 13.3699L8.40761 18.8523C8.41362 18.8597 8.4202 18.8668 8.4273 18.8734L8.43351 18.8792C8.9065 19.3184 9.64217 19.3047 10.0986 18.8483L20.5986 8.34833C21.0672 7.8797 21.0672 7.11991 20.5986 6.65128C20.13 6.18265 19.3702 6.18265 18.9015 6.65128L9.23976 16.313L5.09569 11.6511C5.08905 11.6425 5.08169 11.6345 5.07364 11.627L5.0666 11.6205C4.58094 11.1695 3.82167 11.1976 3.3707 11.6833C2.92283 12.1656 2.9475 12.9178 3.4236 13.3699Z'
        }
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Check;
