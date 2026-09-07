import classNames from 'classnames';
import type { CSSProperties, FC, HTMLAttributes, JSX, MouseEvent, PropsWithChildren } from 'react';
import './styles.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  color?: string;
}

const Text: FC<PropsWithChildren<Props>> = ({ color, onClick, children, className, disabled, ...rest }) => {
  const style = {
    '--btn-color': color,
  } as CSSProperties;

  return (
    <button
      {...rest}
      className={classNames('button-text', { 'is-active': !!onClick }, className)}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Text;
