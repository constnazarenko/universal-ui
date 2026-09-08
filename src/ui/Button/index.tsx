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

const Button: FC<PropsWithChildren<Props>> = ({ color, icon, onClick, children, className, disabled, ...rest }) => {
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
      {icon}
      {children}
    </button>
  );
};

interface ICompound extends FC<PropsWithChildren<Props>> {
  Text: typeof Button;
  Error: typeof Button;
  Warning: typeof Button;
  Info: typeof Button;
  Primary: typeof Button;
  Secondary: typeof Button;
  Tertiary: typeof Button;
  Legendary: typeof Button;
  Epic: typeof Button;
}

const variantCreator = (variantClass: string) => {
  return ({ className, ...rest }: PropsWithChildren<Props>) => (
    <Button {...rest} className={classNames(variantClass, className)} />
  );
};

(Button as ICompound).Text = variantCreator('button-text');
(Button as ICompound).Error = variantCreator('button-error');
(Button as ICompound).Warning = variantCreator('button-warning');
(Button as ICompound).Info = variantCreator('button-info');
(Button as ICompound).Primary = variantCreator('button-primary');
(Button as ICompound).Secondary = variantCreator('button-secondary');
(Button as ICompound).Tertiary = variantCreator('button-tertiary');
(Button as ICompound).Legendary = variantCreator('button-legendary');
(Button as ICompound).Epic = variantCreator('button-epic');

export default Button as ICompound;
