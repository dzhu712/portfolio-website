import React from "react";
import type { TableRowProps } from "./TableRow.types";
import styled, { css } from "styled-components";

const StyledTableRow = styled.tr<{ $disabled?: boolean; }>`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

/**
 * A customizable table row component
 */
export const TableRow = ({
  backgroundColor,
  children,
  disabled = false,
  ...props
}: TableRowProps) => {
  return (
    <StyledTableRow
      style={{ backgroundColor }}
      $disabled={disabled}
      {...props}
    >
      {children}
    </StyledTableRow>
  );
};
