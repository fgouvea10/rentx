import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { Spinner } from "phosphor-react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  icon?: ReactElement;
  loading?: boolean;
  loadingMessage?: string;
  children: ReactNode;
  path?: string;
};

export function Button({
  variant = "primary",
  icon,
  loading,
  loadingMessage,
  children,
  path,
  ...rest
}: ButtonProps) {
  if (loading) {
    return (
      <button
        className="w-full h-12 flex gap-2 items-center justify-center bg-blue-200 text-sm text-white font-medium py-2 px-4 rounded transition-all"
        disabled={loading}
        {...rest}
      >
        {loadingMessage ? (
          <>
            <Spinner size={20} color="#FFF" className="animate-spin" />
            {loadingMessage}
          </>
        ) : (
          <Spinner size={20} color="#FFF" className="animate-spin" />
        )}
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        className="w-full h-12 flex gap-2 items-center justify-center bg-transparent text-sm text-blue-500 font-medium py-2 px-4 border border-blue-500 rounded transition-all"
        disabled={loading}
        {...rest}
      >
        {!!icon && icon}
        {children}
      </button>
    );
  }

  return (
    <button
      className="w-full h-12 flex gap-2 items-center justify-center bg-blue-500 text-sm hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-all disabled:bg-blue-300 disabled:opacity-70 disabled:cursor-not-allowed"
      disabled={loading}
      {...rest}
    >
      {!!icon && icon}
      {children}
    </button>
  );
}
