import React from "react";
import type { TableFooterProps } from "./TableFooter.types";
import styled, { css } from "styled-components";

const StyledTableFooter = styled.td<{ $disabled?: boolean; }>`
  background-color: #F3F3F3;
  padding: 12px;

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

/**
 * A customizable table footer component
 */
export const TableFooter = ({
  backgroundColor,
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
