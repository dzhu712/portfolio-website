import React from "react";
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
  backgroundColor,
  disabled = false,
  ...props
}: RadioButtonProps) => {
  return (
    <StyledRadioButton
      style={{ backgroundColor }}
      type="radio"
      disabled={disabled}
      {...props}
    />
  );
};
