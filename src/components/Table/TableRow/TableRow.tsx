import React from "react";
import type { TableRowProps } from "./TableRow.types";
import styled, { css } from "styled-components";

const StyledTableRow = styled.tr<{ $disabled?: boolean; }>`
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
