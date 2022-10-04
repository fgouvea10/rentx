import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactElement,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  error?: string;
  id?: string;
  onIconClick?: () => void;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, id, leftIcon, rightIcon, error, onIconClick, ...rest },
  ref,
) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {!!label && (
        <label
          htmlFor={id}
          className={`text-sm text-stone-400 font-normal ${
            !!error && '!text-red-600'
          }`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {!!leftIcon && (
          <div className="flex items-center justify-center absolute inset-y-0 left-0 pl-3">
            {leftIcon}
          </div>
        )}
        <input
          id={id}
          className={`block p-4 py-3 ${!!leftIcon && 'pl-12'} ${
            !!rightIcon && 'pr-10'
          } w-full text-sm bg-white border border-solid border-stone-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 ${
            !!error && 'border-[1px] border-solid border-red-600'
          }`}
          ref={ref}
          {...rest}
        />
        {!!rightIcon && (
          <button
            type="button"
            className="absolute flex items-center justify-center bg-transparent border-0 inset-y-0 right-0 pr-3"
            onClick={onIconClick}
          >
            {rightIcon}
          </button>
        )}
      </div>
      {!!error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export const Input = forwardRef(InputBase);
