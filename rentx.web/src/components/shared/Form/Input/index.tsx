import { ReactElement, InputHTMLAttributes } from "react";

import { Container, Input as TextInput, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactElement;
  error?: string;
  id: string;
  onIconClick?: () => void;
}

export function Input({
  id,
  icon,
  label,
  error,
  onIconClick,
  ...rest
}: InputProps): ReactElement {
  return (
    <Container>
      <TextInput
        className={!!error ? "invalid-field" : ""}
        placeholder=" "
        id={id}
        {...rest}
      />
      <Label htmlFor={id} className={!!error ? "invalid-field" : ""}>
        {label}
      </Label>
      {!!icon && (
        <button type="button" onClick={onIconClick}>
          {icon}
        </button>
      )}
      {!!error && <p>{error}</p>}
    </Container>
  );
}
