import React from "react";
import type { InputProps } from "./Input.types";
import styled from "styled-components";


const StyledInput = styled.input`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 100%;
  border: 1px grey solid;
  padding: 8px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledTextarea = styled.textarea`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 100%;
  border: 1px grey solid;
  padding: 8px;
  resize: vertical;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/**
 * A customizable input component
 */
export const Input = ({
  backgroundColor,
  type = "text",
  disabled = false,
  ...props
}: InputProps) => {
  return (
    type === "textarea" ?
      <StyledTextarea
        style={{ backgroundColor }}
        disabled={disabled}
        rows={4}
        {...props}
      /> :
      <StyledInput
        style={{ backgroundColor }}
        type={type}
        disabled={disabled}
        {...props}
      />
  );
};
