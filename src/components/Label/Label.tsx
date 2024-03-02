import React from "react";
import type { LabelProps } from "./Label.types";
import styled, { css } from "styled-components";

const StyledLabel = styled.label<{ $disabled?: boolean }>`
  cursor: pointer;

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

/**
 * A customizable label component
 */
export const Label = ({
  backgroundColor,
  color = "black",
  htmlFor,
  label,
  disabled = false,
  ...props
}: LabelProps) => {
  return (
    <StyledLabel
      style={{ backgroundColor, color }}
      htmlFor={htmlFor}
      $disabled={disabled}
      {...props}
    >
      {label}
    </StyledLabel>
  );
};
