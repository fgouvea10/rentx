import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { CircleNotch } from "phosphor-react";

import { ButtonContainer } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactElement;
  loading?: boolean;
  loadingMessage?: string;
  children: ReactNode;
};

export function Button({
  icon,
  loading,
  loadingMessage,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      type="button"
      disabled={loading}
      className={loading ? "animate" : ""}
      {...rest}
    >
      {!loading ? (
        children
      ) : (
        <>
          <CircleNotch size={16} color="#fff" className="spin" />
          {loadingMessage}
        </>
      )}
    </ButtonContainer>
  );
}
