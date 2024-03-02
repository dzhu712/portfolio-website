import React from "react";
import type { TableFooterProps } from "./TableFooter.types";
import styled, { css } from "styled-components";

const StyledTableFooter = styled.td<{ $disabled?: boolean; }>`
  padding: 12px;
  border: 1px solid #E5E5E5;
  border-collapse: collapse;

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

/**
 * A customizable table footer component
 */
export const TableFooter = ({
  backgroundColor = "#F3F3F3",
  label,
  disabled = false,
  ...props
}: TableFooterProps) => {
  return (
    <StyledTableFooter
      style={{ backgroundColor }}
      $disabled={disabled}
      {...props}
    >
      {label}
    </StyledTableFooter>
  );
};
