import { Button as MUIButton } from '@mui/material';
import classNames from 'classnames';
import type { FC, MouseEvent, PropsWithChildren, ReactNode } from 'react';
import Button from '../Button';

interface GreenButtonProps {
  onClick?: (event: MouseEvent) => void;
  type?: 'button' | 'submit';
  isTrulyGreen?: boolean;
  isHyperactive?: boolean;
  disabled?: boolean;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
}

/**
 * @deprecated Use <Button.Epic /> or <Button.Legendary /> instead.
 */
const GreenButton: FC<PropsWithChildren<GreenButtonProps>> = ({
  onClick,
  type = 'submit',
  children,
  isTrulyGreen,
  isHyperactive,
  disabled,
  className,
  startIcon,
  endIcon,
  variant = 'contained',
}) => {
  if (isTrulyGreen && !isHyperactive) {
    return (
      <Button.Epic onClick={onClick} disabled={disabled}>
        {children}
      </Button.Epic>
    );
  }

  if (isHyperactive) {
    return (
      <Button.Legendary onClick={onClick} disabled={disabled}>
        {children}
      </Button.Legendary>
    );
  }

  return (
    <MUIButton
      className={classNames({ 'is-disabled': disabled }, className)}
      type={type}
      onClick={onClick}
      data-after={children}
      data-before=""
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      variant={variant}
    >
      {children}
    </MUIButton>
  );
};

export default GreenButton;
