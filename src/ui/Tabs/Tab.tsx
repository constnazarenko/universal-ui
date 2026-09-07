import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import Button from '../Button';

export interface Props {
  id: string | number;
  className?: string;
  onClick?(value: string | number): void;
  onChange?(value: string | number): void;
  disabled?: boolean;
  isSelected?: boolean;
}

const Tab: FC<PropsWithChildren<Props>> = ({ id, onClick, onChange, className, children, disabled, isSelected }) => {
  return (
    <Button.Text
      className={classNames('tab', className, { 'is-selected': isSelected })}
      disabled={disabled}
      onClick={() => {
        onChange?.(id);
        onClick?.(id);
      }}
    >
      {children}
    </Button.Text>
  );
};

export default Tab;
