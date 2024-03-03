import React from "react";
import type { TableProps } from "./Table.types";
import styled, { css } from "styled-components";

const StyledTable = styled.table<{ $disabled?: boolean; }>`
  border-collapse: collapse;

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

/**
 * A customizable table component
 */
export const Table = ({
  backgroundColor,
  children,
  disabled = false,
  ...props
}: TableProps) => {
  return (
    <StyledTable
      style={{ backgroundColor }}
      $disabled={disabled}
      {...props}
    >
      {children}
    </StyledTable>
  );
};
