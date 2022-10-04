import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactElement,
} from 'react';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactElement;
  error?: string;
  id: string;
  onIconClick?: () => void;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, id, icon, error, onIconClick, ...rest },
  ref,
) => {
  return (
    <div className={styles['input-col']}>
      <div className={styles['input-container']}>
        <input
          type="text"
          id={id}
          placeholder=" "
          className={`${!!error && styles['input-error']} peer`}
          ref={ref}
          {...rest}
        />
        <label
          htmlFor={id}
          className={`${
            !!error && styles['label-error']
          } peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black`}
        >
          {label}
        </label>
        {!!icon && (
          <button
            type="button"
            className="absolute flex items-center justify-center bg-transparent border-0 inset-y-0 right-0 pr-3"
            onClick={onIconClick}
          >
            {icon}
          </button>
        )}
      </div>
      {!!error && <p className={styles['error-message']}>{error}</p>}
    </div>
  );
};

export const Input = forwardRef(InputBase);
