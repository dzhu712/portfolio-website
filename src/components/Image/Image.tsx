import React from "react";
import type { ImageProps } from "./Image.types";
import styled, { css } from "styled-components";

const StyledImage = styled.img<{ $type?: string; $disabled?: boolean; }>`
  width: 400px;
  object-fit: cover;

  ${props => props.$type === "small" && css`
    width: 80px;
    height: 80px;
  `}

  ${props => props.$type === "round" && css`
    width: 200px;
    height: 200px;
    border-radius: 50%;
  `}

  ${props => props.$disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  @media screen and (max-width: 600px) {
    width: 100%;

    ${props => props.$type === "small" && css`
      width: 60px;
      height: 60px;
    `}

    ${props => props.$type === "round" && css`
      width: 150px;
      height: 150px;
    `}
  }
`;

/**
 * A customizable image component
 */
export const Image = ({
  backgroundColor,
  type = "primary",
  disabled = false,
  ...props
}: ImageProps) => {
  return (
    <StyledImage
      style={{ backgroundColor }}
      $type={type}
      $disabled={disabled}
      {...props}
    />
  );
};
