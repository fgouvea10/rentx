import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import { CircleNotch } from 'phosphor-react';

import styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  loadingMessage?: string;
  children: ReactNode;
  icon?: ReactElement;
  variant?: 'primary' | 'secondary';
};

export function Button({
  children,
  loading,
  loadingMessage,
  icon,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  if (variant === 'secondary') {
    return (
      <button
      type="button"
      disabled={loading}
      className={`${styles['secondary-btn']}`}
      {...rest}
    >
      {/* {!!loading ? (
        <>
          <CircleNotch />
          {loadingMessage}
        </>
      ) : (
        children
      )} */}
      {children}
    </button>
    )
  }
  return (
    <button
      type="button"
      disabled={loading}
      className={`${styles.btn} !bg-red500`}
      {...rest}
    >
      {!!loading ? (
        <>
          <CircleNotch />
          {loadingMessage}
        </>
      ) : (
        children
      )}
    </button>
  );
}
