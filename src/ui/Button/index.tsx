import classNames from 'classnames';
import type { CSSProperties, FC, HTMLAttributes, JSX, MouseEvent, PropsWithChildren } from 'react';
import Text from './Text';
import './styles.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  color?: string;
}

const Button: FC<PropsWithChildren<Props>> = ({ color, onClick, children, className, disabled, ...rest }) => {
  const style = {
    '--btn-color': color,
  } as CSSProperties;

  return (
    <button
      {...rest}
      className={classNames('button-general', { 'is-active': !!onClick }, className)}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

interface ICompound extends FC<PropsWithChildren<Props>> {
  Text: typeof Text;
}

(Button as ICompound).Text = Text;

export default Button as ICompound;
