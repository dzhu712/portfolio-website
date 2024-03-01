import type { RadioButtonProps } from "./RadioButton.types";
import styled from "styled-components";

const StyledRadioButton = styled.input`
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/**
 * A customizable radio button component
 */
export const RadioButton = ({
  disabled = false,
  ...props
}: RadioButtonProps) => {
  return (
    <StyledRadioButton
      type="radio"
      disabled={disabled}
      {...props}
    />
  );
};
