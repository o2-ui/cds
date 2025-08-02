import type { SVGProps } from 'react';

import Style from './style.module.scss';

import { mergeClassNames } from '@/util/string-helper';

interface Props extends SVGProps<SVGSVGElement> {
  spin?: boolean;
}

/**
 * @author Jeff
 */
const LoadingSpinner = (props: Props) => {
  const { spin = true, className, role, 'aria-label': ariaLabel, ...rest } = props;

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      width={24}
      height={24}
      viewBox={'0 0 24 24'}
      role={role || 'status'}
      aria-label={ariaLabel || 'Loading'}
      className={mergeClassNames(Style['LoadingSpinner'], spin && Style['SpinAnimation'], className)}
      {...rest}
    >
      <circle className={Style['LoadingSpinner__Background']} cx={12} cy={12} r={10} stroke={'currentColor'} strokeWidth={4} fill={'none'} />
      <circle
        className={Style['LoadingSpinner__Foreground']}
        cx={12}
        cy={12}
        r={10}
        stroke={'currentColor'}
        strokeWidth={4}
        strokeLinecap={'butt'}
        fill={'none'}
        strokeDasharray={'47 15'}
        strokeDashoffset={0}
      />
    </svg>
  );
};

export default LoadingSpinner;
