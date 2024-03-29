import React from "react";
import type { TableCellProps } from "./TableCell.types";
import styled, { css } from "styled-components";

const StyledTableCell = styled.td<{ $disabled?: boolean; }>`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  flex: 1;
  padding: 12px;
  border: 1px solid #E5E5E5;

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

/**
 * A customizable table cell component
 */
export const TableCell = ({
  backgroundColor = "white",
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
