import React from "react";
import type { TableHeaderProps } from "./TableHeader.types";
import styled, { css } from "styled-components";

const StyledTableHeader = styled.th<{ $disabled?: boolean; }>`
  background-color: #18A0FB;
  font-weight: normal;
  color: white;
  padding: 12px;

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

/**
 * A customizable table header component
 */
export const TableHeader = ({
  backgroundColor,
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
