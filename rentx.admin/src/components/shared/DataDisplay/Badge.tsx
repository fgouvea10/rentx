import { ReactElement, ReactNode } from 'react';

type BadgeProps = {
  type: 'green' | 'blue' | 'red' | 'yellow';
  children: ReactNode;
};

export function Badge({ type = 'green', children }: BadgeProps): ReactElement {
  switch (type) {
    case 'blue':
      return (
        <div className="bg-blue-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-xs text-blue-500 font-normal">
              {children}
            </span>
          </div>
        </div>
      );
    case 'red':
      return (
        <div className="bg-red-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-xs text-red-500 font-normal">{children}</span>
          </div>
        </div>
      );
    case 'yellow':
      return (
        <div className="bg-yellow-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-xs text-yellow-500 font-normal">
              {children}
            </span>
          </div>
        </div>
      );

    default:
      return (
        <div className="bg-green-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-xs text-green-500 font-normal">
              {children}
            </span>
          </div>
        </div>
      );
  }
}
