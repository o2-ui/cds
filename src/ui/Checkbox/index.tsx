import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import type { ComponentProps } from 'react';

import Style from './style.module.scss';

import Check from '@/ui/Icon/Check';
import { mergeClassNames } from '@/util/string-helper';
import { checkTruthy, checkUndefined } from '@/util/type-guard';

const getCheckboxClass = (checked: boolean) => {
  switch (checked) {
    case true:
      return Style['CheckBox--Checked'];
    case false:
    default:
      return Style['CheckBox--UnChecked'];
  }
};

const getCheckIconClass = (checked: boolean) => {
  switch (checked) {
    case true:
      return Style['CheckIcon--Checked'];
    case false:
    default:
      return Style['CheckIcon--UnChecked'];
  }
};

interface IRefValue {
  checked: boolean;
}

interface Props extends ComponentProps<'button'> {
  isChecked?: boolean;
}

const Checkbox = forwardRef<IRefValue, Props>((props: Props, ref) => {
  const { className, isChecked, disabled = false, role, 'aria-disabled': ariaDisabled, 'aria-checked': ariaChecked, onClick, ...rest } = props;
  const [checked, setIsChecked] = useState<boolean>(checkTruthy(isChecked));

  // NOTE: 체크되었는지에 대한 내부상태(checked), 외부상태(isChecked) 동기화
  useEffect(() => {
    if (!checkUndefined(isChecked)) {
      setIsChecked(isChecked!);
    }
  }, [isChecked]);

  // NOTE: ref로 외부에 내부 상태 공개
  useImperativeHandle(ref, () => ({
    checked: checked,
  }));

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (checkUndefined(isChecked)) {
        setIsChecked((prev) => !prev);
      }
      if (onClick) {
        onClick(e);
      }
    },
    [isChecked, onClick],
  );

  return (
    <aside className={Style['CheckBoxWrapper']}>
      <button
        className={mergeClassNames(Style['CheckBox'], getCheckboxClass(checked), className)}
        disabled={disabled}
        aria-disabled={ariaDisabled || disabled}
        role={role || 'checkbox'}
        aria-checked={ariaChecked || checked}
        onClick={handleClick}
        {...rest}
      >
        <Check className={getCheckIconClass(checked)} aria-hidden={true} />
      </button>
    </aside>
  );
});

export default Checkbox;
