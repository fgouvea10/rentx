import {
  forwardRef,
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
} from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  id?: string;
};

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ label, error, id, ...rest }, ref) => {
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
      <textarea
        rows={6}
        id={id}
        ref={ref}
        className={`block outline-none resize-none p-4 py-3 w-full text-sm bg-white border border-solid border-stone-300 rounded focus:ring-blue-500 focus:border-blue-500
      ${!!error && 'border border-solid border-red-600'}
      `}
        {...rest}
      />
      {!!error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export const Textarea = forwardRef(TextareaBase);
