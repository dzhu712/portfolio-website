import type { ButtonProps } from "./Button.types";
import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  opacity: 0.8;
  border: none;
  border-radius: 6px;
  padding: 12px 36px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:not(:disabled):active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/**
 * A customizable button component
 */
export const Button = ({
  backgroundColor = "#138DDF",
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      style={{ backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
