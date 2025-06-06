import type { ReactElement, SVGProps } from 'react';

import Style from '../style.module.scss';

const ArrowDown = (props: SVGProps<SVGSVGElement>): ReactElement => {
  const { className = Style.DefaultLayout, ...rest } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" fill="none" className={className} {...rest}>
      <path
        clipRule="evenodd"
        d="M12.6364 15.6363C12.2849 15.9878 11.7151 15.9878 11.3636 15.6363L5.36363 9.6363C5.01216 9.28483 5.01216 8.71498 5.36363 8.36351C5.7151 8.01203 6.28495 8.01203 6.63642 8.36351L12 13.7271L17.3636 8.36351C17.7151 8.01203 18.2849 8.01203 18.6364 8.36351C18.9879 8.71498 18.9879 9.28483 18.6364 9.6363L12.6364 15.6363Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default ArrowDown;
