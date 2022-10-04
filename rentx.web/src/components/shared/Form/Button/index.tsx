import { ButtonHTMLAttributes, ReactNode } from 'react';
import { CircleNotch } from 'phosphor-react';

import styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  loadingMessage?: string;
  children: ReactNode;
};

export function Button({
  children,
  loading,
  loadingMessage,
  ...rest
}: ButtonProps) {
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
