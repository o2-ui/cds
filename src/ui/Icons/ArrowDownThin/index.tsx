import type { ReactElement, SVGProps } from 'react';

const ArrowDownThin = (props: SVGProps<SVGSVGElement>): ReactElement => {
  const { className, ...rest } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" className={className} {...rest}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4949 15.4949C12.2216 15.7683 11.7783 15.7683 11.505 15.4949L5.50498 9.49492C5.23161 9.22156 5.23161 8.77834 5.50498 8.50498C5.77834 8.23161 6.22156 8.23161 6.49493 8.50498L12 14.01L17.505 8.50498C17.7783 8.23161 18.2216 8.23161 18.4949 8.50498C18.7683 8.77834 18.7683 9.22156 18.4949 9.49493L12.4949 15.4949Z"
      />
    </svg>
  );
};

export default ArrowDownThin;
