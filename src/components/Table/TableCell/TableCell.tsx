import React from "react";
import type { TableCellProps } from "./TableCell.types";
import styled, { css } from "styled-components";

const StyledTableCell = styled.td<{ $disabled?: boolean; }>`
  padding: 12px;

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

/**
 * A customizable table cell component
 */
export const TableCell = ({
  backgroundColor,
  label,
  disabled = false,
  ...props
}: TableCellProps) => {
  return (
    <StyledTableCell
      style={{ backgroundColor }}
      $disabled={disabled}
      {...props}
    >
      {label}
    </StyledTableCell>
  );
};
