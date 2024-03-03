import React from "react";
import type { LinkProps } from "./Link.types";
import styled, { css } from "styled-components";

const StyledLink = styled.a<{ $large?: boolean; $blue?: boolean; $bold?: boolean; $disabled?: boolean; }>`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${props => props.$large && css`
    font-size: 24px;
  `}

  ${props => props.$blue && css`
    color: #18A0FB;
  `}

  ${props => props.$bold && css`
    font-weight: bold;
  `}

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

/**
 * A customizable link component
 */
export const Link = ({
  backgroundColor,
  href,
  label,
  large = false,
  blue = false,
  bold = false,
  disabled = false,
  ...props
}: LinkProps) => {
  return (
    <StyledLink
      style={{ backgroundColor }}
      $large={large}
      $blue={blue}
      $bold={bold}
      $disabled={disabled}
      href={disabled ? void (0) : href}
      target="_blank"
      {...props}
    >
      {label}
    </StyledLink>
  );
};
