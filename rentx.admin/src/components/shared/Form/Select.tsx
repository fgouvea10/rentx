import { ReactElement, useState } from 'react';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  onChange?: () => void;
  label?: string;
  options: Option[];
  defaultValue?: string;
  leftIcon?: ReactElement;
};

export function Select({
  label,
  defaultValue,
  options,
  leftIcon,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2">
      {!!label && (
        <label
          id="listbox-label"
          className="block text-sm font-medium text-stone-400"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          className="relative w-full bg-white border border-gray-300 rounded shadow-sm pl-3 pr-10 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 p-4 py-3 sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={() => setIsOpen(!isOpen)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsOpen(false);
            }
          }}
        >
          <span
            className={`flex gap-4 items-center ${
              defaultValue ? 'text-stone-400' : 'text-stone-800'
            }`}
          >
            {!!leftIcon && leftIcon} {defaultValue ?? options[0].label}
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {options && options.length <= 0 ? (
              <p className="text-stone-600 p-4 text-center">
                Nenhuma opção foi fornecida.
              </p>
            ) : (
              <>
                {options.map((option, index) => (
                  <li
                    key={String(index + 1)}
                    className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-stone-50"
                    id="listbox-option-0"
                    role="option"
                  >
                    <div className="flex items-center">
                      <span className="font-normal ml-3 block truncate">
                        {option.label}
                      </span>
                    </div>
                  </li>
                ))}
              </>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
