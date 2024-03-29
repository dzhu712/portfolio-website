import React from "react";
import type { TableHeaderProps } from "./TableHeader.types";
import styled, { css } from "styled-components";

const StyledTableHeader = styled.th<{ $disabled?: boolean; }>`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  flex: 1;
  font-weight: normal;
  color: white;
  padding: 12px;
  border: 1px solid #E5E5E5;

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

/**
 * A customizable table header component
 */
export const TableHeader = ({
  backgroundColor = "#18A0FB",
  label,
  disabled = false,
  ...props
}: TableHeaderProps) => {
  return (
    <StyledTableHeader
      style={{ backgroundColor }}
      $disabled={disabled}
      {...props}
    >
      {label}
    </StyledTableHeader>
  );
};
